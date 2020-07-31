const extend = [
  'tslint-eslint-rules',
  'tslint-config-standard'
]

export { extend as extends }

export const linterOptions = {
  exclude: [
    'node_modules/**',
    '**/*.json'
  ]
}

export const rules = {
  'prefer-conditional-expression': [
    true,
    'check-else-if'
  ],
  'prefer-switch': true,
  'return-undefined': true,
  'strict-type-predicates': true
}
