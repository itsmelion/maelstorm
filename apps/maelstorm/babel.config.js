process.env.TAMAGUI_TARGET = 'native';

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['transform-inline-environment-variables', {
      include: ['TAMAGUI_TARGET'],
    }],
  ],
};
