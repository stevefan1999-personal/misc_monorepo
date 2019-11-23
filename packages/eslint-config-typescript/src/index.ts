import { mapKeys, namespaced } from '@stevefan1999/utils'

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
        ...namespaced('@typescript-eslint')({
          ...mapKeys({
            error: [
              'adjacent-overload-signatures',
              ['array-type', { default: 'array-simple' }],
              'await-thenable',
              ['consistent-type-definitions', 'interface'],
              [
                'explicit-function-return-type',
                {
                  allowExpressions: true,
                  allowHigherOrderFunctions: true,
                  allowTypedFunctionExpressions: true
                }
              ],
              [
                'explicit-member-accessibility',
                {
                  accessibility: 'explicit'
                }
              ],
              'generic-type-naming',
              ['indent', 2],
              [
                'member-delimiter-style',
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
              [
                'member-ordering',
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
              'no-floating-promises',
              'no-for-in-array',
              'no-unnecessary-qualifier',
              'no-unnecessary-type-assertion',
              'prefer-for-of',
              'prefer-includes',
              [
                'promise-function-async',
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
              'restrict-plus-operands',
              ['semi', 'never'],
              ['triple-slash-reference', { types: 'prefer-import' }],
              [
                'typedef',
                {
                  arrowParameter: false,
                  propertyDeclaration: false
                }
              ],
              ['unbound-method', { ignoreStatic: true }],
              'unified-signatures'
            ],
            off: [
              'interface-name-prefix',
              'no-explicit-any',
              'no-non-null-assertion',
              'no-unused-vars',
              'no-use-before-define',
              'no-var-requires'
            ],
            warn: [
              ['tslint/config', { lintFile: './tslint.json' }]
            ]
          })
        })
      }
    }
  ]
}
