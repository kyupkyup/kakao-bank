module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-combine-media-query'),
    require('postcss-csso')({
      restructure: false
    })
  ]
};
