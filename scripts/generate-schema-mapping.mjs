import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.resolve(scriptDirectory, '../lib/api/types/api-schema.types.ts');
const mappingPath = path.resolve(scriptDirectory, '../lib/api/types/mapping.ts');
const schemaSource = fs.readFileSync(schemaPath, 'utf8');
const sourceFile = ts.createSourceFile(
  schemaPath,
  schemaSource,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

const componentsInterface = sourceFile.statements.find(
  (statement) => ts.isInterfaceDeclaration(statement) && statement.name.text === 'components',
);
const schemasProperty = componentsInterface?.members.find(
  (member) => ts.isPropertySignature(member) && member.name?.getText(sourceFile) === 'schemas',
);

if (!schemasProperty || !schemasProperty.type || !ts.isTypeLiteralNode(schemasProperty.type)) {
  throw new Error(`Could not find components.schemas in ${schemaPath}`);
}

function getPropertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }

  return undefined;
}

function toTypeName(schemaName) {
  const identifier = schemaName.replace(/[^a-zA-Z0-9_$]/g, '_');
  return /^[a-zA-Z_$]/.test(identifier) ? identifier : `_${identifier}`;
}

const usedTypeNames = new Set();
const aliases = schemasProperty.type.members.flatMap((member) => {
  if (!ts.isPropertySignature(member) || !member.name) {
    return [];
  }

  const schemaName = getPropertyName(member.name);
  if (schemaName === undefined) {
    return [];
  }

  const baseTypeName = toTypeName(schemaName);
  let typeName = baseTypeName;
  let suffix = 2;
  while (usedTypeNames.has(typeName)) {
    typeName = `${baseTypeName}_${suffix}`;
    suffix += 1;
  }
  usedTypeNames.add(typeName);

  return [`export type ${typeName} = components['schemas'][${JSON.stringify(schemaName)}];`];
});

const mappingSource = [
  "import type { components } from './api-schema.types';",
  '',
  ...aliases,
  '',
].join('\n');

fs.writeFileSync(mappingPath, mappingSource);
console.log(`Generated ${aliases.length} schema type aliases in ${mappingPath}`);
