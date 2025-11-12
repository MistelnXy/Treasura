module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // PENTING: Plugin ini harus selalu ada di paling bawah
      "react-native-reanimated/plugin",
    ],
  };
};