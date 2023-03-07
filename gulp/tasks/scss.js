import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import webpcss from "gulp-webpcss";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import cleanCss from "gulp-clean-css";

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })  
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))   
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded',

        }))        
        .pipe(webpcss(
            {
                webpClass: ".webp",
                noWebpClass: ".nowebp"
            }
        ))
        .pipe(groupCssMediaQueries())
        .pipe(cleanCss())
        .pipe(app.gulp.dest(app.path.build.css))
}