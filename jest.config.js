module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.{ts,js}*'],
  coverageThreshold: {
    global: {
      lines: 60,
      statements: 60
    }
  }
};
