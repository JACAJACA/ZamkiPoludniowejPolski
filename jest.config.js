module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-navigation-shared-element|react-native-community))',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@react-native-async-storage/async-storage': '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        ['@babel/plugin-proposal-export-default-from'],
        ['@babel/plugin-proposal-export-namespace-from']
      ]
    }],
  },
};