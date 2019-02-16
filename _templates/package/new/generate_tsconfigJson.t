---
to: packages/<%= packageName %>/tsconfig.json
unless_exists: true
---
{
  "compilerOptions": {
    "outDir": "lib/",
    "rootDir": "src"
  },
  "extends": "../../tsconfig.json",
  "references": [
  ]
}