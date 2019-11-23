---
inject: true
to: tsconfig.json
skip_if: ./packages/<%= packageName %>
after: "references"
unless_exists: true
---
    {
      "path": "./packages/<%= packageName %>"
    },