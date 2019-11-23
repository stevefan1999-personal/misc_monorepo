---
inject: true
to: tsconfig.json
skip_if: \@stevefan1999/<%= packageName %>
after: "paths"
unless_exists: true
---
      "@stevefan1999/<%= packageName %>*": [
        "./packages/<%= packageName %>/src*"
      ],
