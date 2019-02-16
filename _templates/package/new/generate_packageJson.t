---
to: packages/<%= packageName %>/package.json
unless_exists: true
---
{
  "index": "./src/index.ts",
  "main": "./dist/index.cjs.js",
  "module": "./dist/index.esm.js",
  "name": "@stevefan1999/<%= packageName %>",
  "version": "0.0.1"
}
