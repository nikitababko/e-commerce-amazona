module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/fonts/**/*")
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest("./build/fonts"));
    };
};
