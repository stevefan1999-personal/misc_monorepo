module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  plugins: [
    'sort-keys-fix'
  ],
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'curly': [
      'error',
      'multi-line'
    ],
    'dot-notation': [
      'error',
      { allowKeywords: false }
    ],
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'no-duplicate-imports': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    'semi': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'always'
      }
    ],
    'yoda': 'error'
  }
}
