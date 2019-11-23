module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
      ],
      files: ['*.ts', '*.d.ts', '*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      },
      plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint'
      ],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
          'error',
          { default: 'array-simple' }
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true
          }
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit'
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
            multiline: {
              delimiter: 'none',
              requireLast: true
            },
            overrides: {
              interface: {
                multiline: {
                  delimiter: 'none',
                  requireLast: true
                }
              }
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'instance-field',
              'abstract-field',
              'constructor',
              'instance-method',
              'abstract-method',
              'static-field',
              'static-method'
            ]
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
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
            allowAny: true,
            allowedPromiseNames: [
              'Thenable'
            ],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true
          }
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/semi': [
          'error',
          'never'
        ],
        '@typescript-eslint/triple-slash-reference': ['error', { types: 'prefer-import' }],
        '@typescript-eslint/tslint/config': [
          'warn',
          {
            lintFile: './tslint.json'
          }
        ],
        '@typescript-eslint/typedef': [
          'error',
          {
            arrowParameter: false,
            propertyDeclaration: false
          }
        ],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true
          }
        ],
        '@typescript-eslint/unified-signatures': 'error'
      }
    }
  ]
}
