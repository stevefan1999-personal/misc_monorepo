const extend = [
  'tslint-eslint-rules',
  'tslint-config-standard'
]

export { extend as extends }

export const linterOptions = {
  'exclude': [
    'node_modules/**',
    '**/*.json'
  ]
}

export const rules = {
  'arrow-return-shorthand': [
    true,
    'multiline'
  ],
  'ban-comma-operator': true,
  'binary-expression-operand-order': true,
  'curly': [
    true,
    'ignore-same-line'
  ],
  'forin': true,
  'linebreak-style': false,
  'member-access': [
    true,
    'check-accessor',
    'check-constructor',
    'check-parameter-property'
  ],
  'no-trailing-whitespace': false,
  'object-literal-shorthand': true,
  'one-variable-per-declaration': [
    true,
    'ignore-for-loop'
  ],
  'prefer-conditional-expression': [
    true,
    'check-else-if'
  ],
  'prefer-const': true,
  'prefer-method-signature': true,
  'prefer-object-spread': true,
  'prefer-switch': true,
  'prefer-template': true,
  'prefer-while': true,
  'restrict-plus-operands': true,
  'return-undefined': true,
  'space-before-function-paren': [
    true,
    {
      'anonymous': 'always',
      'asyncArrow': 'always',
      'named': 'always'
    }
  ],
  'strict-type-predicates': true,
  'unified-signatures': true,
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-leading-underscore',
    'allow-pascal-case',
    'allow-snake-case'
  ]
}
