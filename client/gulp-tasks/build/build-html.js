module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/*.html")
            .pipe(plugins.sourcemaps.init())
            .pipe(
                plugins.htmlmin({
                    collapseWhitespace: true,
                    removeComments: true, // удаляем все комментарии
                })
            )
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest("./build/"));
    };
};
