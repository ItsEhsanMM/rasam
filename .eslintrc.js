module.exports = {
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // Required for @typescript-eslint
  },
  rules: {
    // Add custom ESLint rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
