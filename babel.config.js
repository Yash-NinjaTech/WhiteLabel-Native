module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      },
    ],
    ['react-native-paper/babel'],
    ['react-native-reanimated/plugin'],
  ],
};
