module.exports = {
  'extends': [
    'tslint-eslint-rules',
    'tslint-config-standard'
  ],
  'linterOptions': {
    'exclude': [
      'node_modules/**',
      '**/*.json'
    ]
  },
  'rules': {
    'adjacent-overload-signatures': true,
    'array-type': [
      true,
      'array-simple'
    ],
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
    'interface-over-type-literal': true,
    'linebreak-style': [
      true,
      'LF'
    ],
    'member-access': [
      true,
      'check-accessor',
      'check-constructor',
      'check-parameter-property'
    ],
    'member-ordering': [
      true,
      {
        'order': [
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method'
        ]
      }
    ],
    'no-duplicate-imports': false,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': [
      true,
      'check-parameters'
    ],
    'no-empty': false,
    'no-for-in-array': true,
    'no-inferrable-types': [
      true,
      'ignore-params',
      'ignore-properties'
    ],
    'no-invalid-template-strings': true,
    'no-namespace': false,
    'no-null-keyword': true,
    'no-reference': false,
    'no-string-literal': true,
    'no-trailing-whitespace': false,
    'no-unbound-method': [
      true,
      'ignore-static'
    ],
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unsafe-finally': true,
    'no-unused-expression': false,
    'no-use-before-declare': true,
    'no-var-requires': true,
    'object-literal-key-quotes': false,
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
    'prefer-for-of': true,
    'prefer-method-signature': true,
    'prefer-object-spread': true,
    'prefer-switch': true,
    'prefer-template': true,
    'prefer-while': true,
    'promise-function-async': true,
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
    'typedef': [
      true,
      'call-signature',
      'property-declaration',
      'parameter',
      'member-variable-declaration'
    ],
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
}

