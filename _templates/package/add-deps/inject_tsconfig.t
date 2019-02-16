---
inject: true
to: packages/<%= srcPackage %>/tsconfig.json
skip_if: <%= incPackage %>
after: "references"
unless_exists: true
---
    {
      "path": "../<%= incPackage %>"
    },