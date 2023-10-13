const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 0,
    'linebreak-style': 0,
    'react/prop-types': 'off',
    'object-curly-newline': 0,
    'react/jsx-curly-newline': 0,
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/jsx-one-expression-per-line': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/indent': 0,
    'operator-linebreak': 0,
    'arrow-body-style': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-indent': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'function-paren-newline': 0,
    'no-nested-ternary': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
  },
};