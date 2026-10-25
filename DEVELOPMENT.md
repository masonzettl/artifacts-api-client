# Development

## Update schema and bindings
1. Run `npm run update:schema` to generate schema, format it, and generate schema bindings.
2. Add/update/remove the appropriate methods in the artifacts api classes.

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
