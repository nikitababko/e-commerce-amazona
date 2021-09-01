module.exports = function (gulp, plugins) {
  return async function () {
    gulp.watch('./src/*.html');
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('dev-scss'));
    gulp.watch(['./src/js/*js', '!./src/js/app.js']);
    gulp.watch('./src/img/**/*');
  };
};
