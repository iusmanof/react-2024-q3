module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['/coverage/*'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-compiler'],
  rules: {
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
}
