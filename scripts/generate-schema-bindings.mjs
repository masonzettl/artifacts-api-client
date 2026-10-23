import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

/**
 * Name overrides for paths with operations that generate duplicate type names.
 */
const duplicateNameOverrides = new Map([
  ['/my/grandexchange/orders', 'GetMyGeOrders'],
  ['/grandexchange/orders', 'GetGeOrders'],
  ['/my/grandexchange/history', 'GetMyGeHistory'],
  ['/grandexchange/history/{code}', 'GetGeHistory'],
  ['/my/subscribe/stripe', 'BuyStripeSubscription'],
  ['/gems_shop/subscription', 'BuyGemShopSubscription'],
]);

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.resolve(scriptDirectory, '../lib/api/types/api-schema.types.ts');
const bindingPath = path.resolve(scriptDirectory, '../lib/api/types/api-schema-bindings.types.ts');
const schemaSource = fs.readFileSync(schemaPath, 'utf8');
const sourceFile = ts.createSourceFile(
  schemaPath,
  schemaSource,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

function getInterface(name) {
  return sourceFile.statements.find(
    (statement) => ts.isInterfaceDeclaration(statement) && statement.name.text === name,
  );
}

const componentsInterface = getInterface('components');
const pathsInterface = getInterface('paths');
const operationsInterface = getInterface('operations');

function getPropertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }

  return undefined;
}

function getProperty(type, propertyName) {
  if (!type) {
    return undefined;
  }

  const members =
    ts.isTypeLiteralNode(type) || ts.isInterfaceDeclaration(type) ? type.members : undefined;
  if (!members) {
    return undefined;
  }

  return members.find(
    (member) =>
      ts.isPropertySignature(member) &&
      member.name !== undefined &&
      getPropertyName(member.name) === propertyName,
  );
}

const schemasProperty = getProperty(componentsInterface, 'schemas');

if (!schemasProperty || !schemasProperty.type || !ts.isTypeLiteralNode(schemasProperty.type)) {
  throw new Error(`Could not find components.schemas in ${schemaPath}`);
}

if (!pathsInterface || !operationsInterface) {
  throw new Error(`Could not find paths or operations in ${schemaPath}`);
}

function toTypeName(schemaName) {
  const identifier = schemaName.replace(/[^a-zA-Z0-9_$]/g, '_');
  return /^[a-zA-Z_$]/.test(identifier) ? identifier : `_${identifier}`;
}

function toPascalCase(value) {
  const words = value.trim().match(/[a-zA-Z0-9]+/g) ?? [];
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join('');
}

const aliases = [];
const usedTypeNames = new Set();

function addAlias(baseTypeName, typeReference) {
  let typeName = baseTypeName;
  let suffix = 2;
  while (usedTypeNames.has(typeName)) {
    typeName = `${baseTypeName}_${suffix}`;
    suffix += 1;
  }
  usedTypeNames.add(typeName);

  aliases.push(`export type ${typeName} = ${typeReference};`);
}

for (const member of schemasProperty.type.members) {
  if (!ts.isPropertySignature(member) || !member.name) {
    continue;
  }

  const schemaName = getPropertyName(member.name);
  if (schemaName !== undefined) {
    addAlias(toTypeName(schemaName), `components['schemas'][${JSON.stringify(schemaName)}]`);
  }
}

function getOperationName(type) {
  if (
    !type ||
    !ts.isIndexedAccessTypeNode(type) ||
    !ts.isTypeReferenceNode(type.objectType) ||
    !ts.isIdentifier(type.objectType.typeName) ||
    type.objectType.typeName.text !== 'operations' ||
    !ts.isLiteralTypeNode(type.indexType) ||
    !ts.isStringLiteral(type.indexType.literal)
  ) {
    return undefined;
  }

  return type.indexType.literal.text;
}

function getOperationTypeName(operationName, route, method) {
  const routeSuffix = `${route.replace(/[/{}/]/g, '_')}_${method}`;
  if (!operationName.endsWith(routeSuffix)) {
    throw new Error(
      `Operation ${operationName} does not end with the normalized route suffix ${routeSuffix}`,
    );
  }

  const name = operationName.slice(0, -routeSuffix.length).replace(/_+$/, '');
  if (!name) {
    throw new Error(`Could not derive a type name from operation ${operationName}`);
  }

  return toPascalCase(name);
}

function getJsonContentType(type) {
  const content = getProperty(type, 'content');
  const jsonContent = getProperty(content?.type, 'application/json');
  return jsonContent?.type;
}

const operationAliases = [];

for (const pathMember of pathsInterface.members) {
  if (!ts.isPropertySignature(pathMember) || !pathMember.name || !pathMember.type) {
    continue;
  }

  const route = getPropertyName(pathMember.name);
  if (route === undefined || !ts.isTypeLiteralNode(pathMember.type)) {
    continue;
  }

  for (const pathOperation of pathMember.type.members) {
    if (!ts.isPropertySignature(pathOperation) || !pathOperation.name || !pathOperation.type) {
      continue;
    }

    const method = getPropertyName(pathOperation.name);
    if (method !== 'get' && method !== 'post') {
      continue;
    }

    const operationName = getOperationName(pathOperation.type);
    const operation = operationsInterface.members.find(
      (candidate) =>
        ts.isPropertySignature(candidate) &&
        candidate.name !== undefined &&
        getPropertyName(candidate.name) === operationName,
    );
    if (!operation || !operation.type || !ts.isTypeLiteralNode(operation.type)) {
      continue;
    }

    if (!operationName) {
      throw new Error(`Could not resolve operation name for ${method.toUpperCase()} ${route}`);
    }

    let operationTypeName = getOperationTypeName(operationName, route, method);
    if (method === 'get' && !operationTypeName.startsWith('Get')) {
      operationTypeName = `Get${operationTypeName}`;
    }

    const aliasesForOperation = [];
    const responses = getProperty(operation.type, 'responses');
    const success = getProperty(responses?.type, '200');
    const jsonResponse = getJsonContentType(success?.type);
    if (jsonResponse) {
      aliasesForOperation.push({
        suffix: 'ApiResult',
        typeReference: `paths[${JSON.stringify(route)}]['${method}']['responses'][200]['content']['application/json']`,
      });
    }

    if (method === 'get') {
      const parameters = getProperty(operation.type, 'parameters');
      const query = getProperty(parameters?.type, 'query');
      if (query?.type && ts.isTypeLiteralNode(query.type) && query.type.members.length > 0) {
        aliasesForOperation.push({
          suffix: 'ApiQuery',
          typeReference: `paths[${JSON.stringify(route)}]['get']['parameters']['query']`,
        });
      }
    } else {
      const requestBody = getProperty(operation.type, 'requestBody');
      const jsonBody = getJsonContentType(requestBody?.type);
      if (jsonBody) {
        aliasesForOperation.push({
          suffix: 'ApiBody',
          typeReference: `NonNullable<paths[${JSON.stringify(route)}]['post']['requestBody']>['content']['application/json']`,
        });
      }
    }

    operationAliases.push({ operationTypeName, route, aliases: aliasesForOperation });
  }
}

const operationNameCounts = new Map();
for (const { operationTypeName } of operationAliases) {
  operationNameCounts.set(operationTypeName, (operationNameCounts.get(operationTypeName) ?? 0) + 1);
}

for (const { operationTypeName, route, aliases: operationTypeAliases } of operationAliases) {
  let resolvedOperationTypeName = operationTypeName;
  if ((operationNameCounts.get(operationTypeName) ?? 0) > 1) {
    resolvedOperationTypeName =
      duplicateNameOverrides.get(route) ?? `${operationTypeName}For${toPascalCase(route)}`;
  }

  for (const { suffix, typeReference } of operationTypeAliases) {
    addAlias(`${resolvedOperationTypeName}${suffix}`, typeReference);
  }
}

const bindingSource = [
  `/**
 * This file was auto-generated by the generate-schema-mapping script.
 * Do not make direct changes to the file.
 */`,
  '',
  "import type { components, paths } from './api-schema.types';",
  '',
  ...aliases,
  '',
].join('\n');

fs.writeFileSync(bindingPath, bindingSource);
console.log(`Generated ${aliases.length} schema type aliases in ${bindingPath}`);
