module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['js', 'json'],
  setupFilesAfterEnv: ['./jest.setup'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/']
};
