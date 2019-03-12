module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['.stories.jsx'],
  setupFiles: ['<rootDir>/config/jest/register-context.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|mobile-app|static|www|docs|node_modules|scripts)[/\\\\]'
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/file-transform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svg.js'
  },
  coverageReporters: ['text']
}
