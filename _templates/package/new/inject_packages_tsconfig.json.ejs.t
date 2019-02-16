---
inject: true
to: packages/tsconfig.json
skip_if: <%= packageName %>
after: "references"
unless_exists: true
---
    {
      "path": "<%= packageName %>"
    },