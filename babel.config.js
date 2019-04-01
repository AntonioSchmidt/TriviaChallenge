module.exports = function (api) {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
        'babel-preset-expo',
      ],
      plugins: ['transform-flow-strip-types', '@babel/proposal-export-default-from'],
    };
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
