module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "react-native-reanimated/plugin",
        {
          globals: ['__scanOCR'],
        },
      ],
      [
        "babel-plugin-root-import",
        {
          "rootPathSuffix": "src",
          "rootPathPrefix": "~"
        },
      ]
    ],
  };
};
