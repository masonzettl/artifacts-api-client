# Development

## Update schema and bindings
1. Run `npm run update:schema` to generate schema and format it.
2. Run `npm run generate:schema-bindings` to generate schema bindings and format it.

## Building
1. Run `rm -rf dist` to remove `dist` directory (if it exists).
2. Run `npm run pre-build` to run TS check, linter and formatter.
3. Run `npm run build` to build.

To use this local package, install it with `npm i path/to/this/dir`.

## Publishing
1. Update version in `package.json` and `package-lock.json`.
Alternatively, use `npm version {VERSION}` to make version commit.
2. Run `npm publish --dry-run` to check before publishing.
3. Run `npm publish` to publish package.
