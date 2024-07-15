module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      '<tsconfigRootDir>/tsconfig.lint.json',
      '<tsconfigRootDir>/tsconfig.json',
    ],
    extraFileExtensions: ['.json'],
  },
}
