module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@components': './src/app/components',
            '@screens': './src/app/screens',
            '@assets': './src/app/assets',
            '@images': './src/app/assets/images',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};