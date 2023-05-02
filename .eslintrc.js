module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
  ],
  ignorePatterns: ['webpack.config.js'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};
