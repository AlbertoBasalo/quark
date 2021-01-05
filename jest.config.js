// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.js$': 'jest-esm-transformer',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  verbose: true,
};
