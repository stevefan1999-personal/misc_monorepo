module.exports = {
  "extends": [
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-boolean-value": "off",
    "react/jsx-key": "error",
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "ignoreCase": true,
        "reservedFirst": true,
        "shorthandFirst": true
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "arrow": "parens-new-line",
        "assignment": "parens-new-line",
        "condition": "parens",
        "declaration": "parens-new-line",
        "logical": "parens",
        "prop": "parens-new-line",
        "return": "parens-new-line"
      }
    ],
    "react/no-children-prop": "off",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect"
    }
  }
}