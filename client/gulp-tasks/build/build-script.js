module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/js/**/*.js")
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.terser())
            .on("error", console.error.bind(console))
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest("./build/js/"));
    };
};
