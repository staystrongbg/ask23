module.exports = {
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // images: {
  //   disableStaticImages: false,
  //   loader: 'custom',
  // },
};
// process.env.NODE_ENV === 'production' && 'custom'
// process.env.NODE_ENV === 'production' && false;
