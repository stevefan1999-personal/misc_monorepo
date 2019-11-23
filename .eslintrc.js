module.exports = {
  'extends': [
    '@stevefan1999/eslint-config',
    '@stevefan1999/eslint-config-typescript'
  ],
  'ignorePatterns': ['**/node_modules', '**/dist'],
  'parserOptions': {
    'tsconfigRootDir': '.',
    'project': './tsconfig.eslint.json'
  }
}