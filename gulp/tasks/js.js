import webpack from "webpack-stream";
import minify from "gulp-minify";

export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js',
            },
        }))
        .pipe(minify())
        .pipe(app.gulp.dest(app.path.build.js));
}