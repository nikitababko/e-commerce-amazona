module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/img/**/*").pipe(gulp.dest("./build/img/"));
    };
};
