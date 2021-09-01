const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser'); // terser === uglify
const del = require('del');
const plugins = require('gulp-load-plugins')();

/*==========================================================================================================
Server
==========================================================================================================*/
gulp.task('dev-scss', require('./gulp-tasks/dev/dev-scss')(gulp, plugins));
gulp.task(
  'dev-watcher',
  require('./gulp-tasks/dev/dev-watcher')(gulp, plugins)
);

gulp.task('dev-syns', function () {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
    port: 3000,
    watch: true,
    notify: false, // Нужно, что бы в браузере не писалось, пдключено к серверу либо же нет
  });
});

gulp.task('dev', gulp.series(gulp.parallel('dev-watcher', 'dev-syns')));

/*==========================================================================================================
Build
==========================================================================================================*/
gulp.task('clean', async function () {
  del.sync('./build');
});

gulp.task(
  'build-html',
  require('./gulp-tasks/build/build-html')(gulp, plugins)
);
gulp.task(
  'build-css',
  require('./gulp-tasks/build/build-css')(gulp, plugins)
);
gulp.task(
  'build-script',
  require('./gulp-tasks/build/build-script')(gulp, plugins)
);
gulp.task(
  'build-img',
  require('./gulp-tasks/build/build-img')(gulp, plugins)
);
gulp.task(
  'build-font',
  require('./gulp-tasks/build/build-font')(gulp, plugins)
);

gulp.task(
  'export',
  gulp.parallel(
    'build-html',
    'build-css',
    'build-script',
    'build-img',
    'build-font'
  )
);

gulp.task('build', gulp.series('clean', 'export'));
