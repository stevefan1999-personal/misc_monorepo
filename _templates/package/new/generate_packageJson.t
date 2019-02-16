---
to: packages/<%= packageName %>/package.json
unless_exists: true
---
{
  "dependencies": {},
  "devDependencies": {},
  "files": [
    "src"
  ],
  "index": "./src/index.ts",
  "main": "./dist/index.cjs.js",
  "module": "./dist/index.esm.js",
  "name": "@stevefan1999/<%= packageName %>",
  "publishConfig": {
    "access": "public"
  },
  "version": "0.0.1"
}
