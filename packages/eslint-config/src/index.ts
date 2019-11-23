module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'sort-keys-fix'
  ],
  rules: {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface'
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true,
        'allowHigherOrderFunctions': true,
        'allowTypedFunctionExpressions': true
      }
    ],
    '@typescript-eslint/generic-type-naming': 'error',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true
        },
        'overrides': {
          'interface': {
            'multiline': {
              'delimiter': 'none',
              'requireLast': true
            }
          }
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        'allowAny': true,
        'allowedPromiseNames': [
          'Thenable'
        ],
        'checkArrowFunctions': true,
        'checkFunctionDeclarations': true,
        'checkFunctionExpressions': true,
        'checkMethodDeclarations': true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'never'
    ],
    '@typescript-eslint/tslint/config': [
      'warn',
      {
        'lintFile': './tslint.json'
      }
    ],
    '@typescript-eslint/unbound-method': [
      'error',
      {
        'ignoreStatic': true
      }
    ],
    'no-duplicate-imports': 'error',
    'no-trailing-spaces': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-vars': 'off',
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'prefer-template': 'error',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true
      }
    ],
    'semi': 'off',
    'sort-imports': [
      'error',
      {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false
      }
    ],
    'sort-keys-fix/sort-keys-fix': 'error'
  }
}
