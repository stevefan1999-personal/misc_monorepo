module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off',
        'indent': 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }]
      }
    }
  ],
  rules: {
    'vue/order-in-components': 'off'
  }
}