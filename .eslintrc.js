module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript'
  ],

  ignorePatterns: ['docs'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/restrict-template-expressions': 'off',
    'react/prop-types': 'off',
    semi: 'off'
  }
}
