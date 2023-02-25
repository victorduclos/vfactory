module.exports = {
  extends: ['prettier', 'semistandard', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'space-before-function-paren': ['off'],
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'] }]
  }
};
