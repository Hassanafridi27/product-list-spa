module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',  // Allow axios to be transformed
    ],
  };
  