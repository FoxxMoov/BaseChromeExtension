module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never']
  }
}
