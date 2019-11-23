import { mapKeys } from '@stevefan1999/utils'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  plugins: [
    'sort-keys-fix'
  ],
  rules: {
    ...mapKeys({
      error: [
        ['arrow-body-style', 'as-needed'],
        ['curly', 'multi-line'],
        ['dot-notation', { allowKeywords: false }],
        'guard-for-in',
        'no-duplicate-imports',
        'no-sequences',
        'no-template-curly-in-string',
        'no-undef-init',
        'no-unsafe-finally',
        'object-shorthand',
        ['one-var', 'never'],
        'prefer-const',
        'prefer-object-spread',
        'prefer-template',
        ['quote-props', 'consistent-as-needed'],
        ['quotes', 'single', { avoidEscape: true }],
        ['sort-imports', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false }],
        ['space-before-function-paren', { anonymous: 'always', asyncArrow: 'always', named: 'always' }],
        'yoda',
        ['node/exports-style', 'module.exports'],
        'sort-keys-fix/sort-keys-fix'
      ],
      off: [
        'linebreak-style',
        'no-trailing-spaces',
        'no-unused-expressions',
        'no-unused-vars',
        'semi',
        'node/no-unpublished-require',
        'node/no-unsupported-features/es-syntax'
      ]
    })
  }
}
