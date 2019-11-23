---
to: packages/<%= packageName %>/package.json
unless_exists: true
---
{
  "dependencies": {},
  "devDependencies": {},
  "files": [
    "dist"
  ],
  "index": "./src/index.ts",
  "main": "./dist/index.js",
  "name": "@stevefan1999/<%= packageName %>",
  "publishConfig": {
    "access": "public"
  },
  "version": "0.0.1"
}
