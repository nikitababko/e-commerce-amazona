module.exports = function (gulp, plugins) {
  return async function () {
    gulp
      .src('./src/scss/index.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(
        plugins.sass({
          errorLogToConsole: true,
        })
      )
      .on('error', console.error.bind(console))
      .pipe(
        plugins.autoprefixer(['last 2 versions', '> 1%', 'ie 7'], {
          cascade: true,
        })
      )
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('./src/css/'));
  };
};
