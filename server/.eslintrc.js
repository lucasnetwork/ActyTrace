module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'import/resolver': 'off',
    'no-undef': 'off',
  },
};
