---
to: packages/<%= packageName %>/tsconfig.json
unless_exists: true
---
{
  "compilerOptions": {
    "baseUrl": "./src",
    "outDir": "./dist",
    "paths": {
      "@/*": [
        "./*"
      ],
      "~/*": [
        "./*"
      ]
    },
    "rootDir": "./src"
  },
  "exclude": [
    "node_modules"
  ],
  "extends": "../../tsconfig.json",
  "include": [
    "src/**/*"
  ]
}
