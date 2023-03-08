//main module
import gulp from "gulp";
//path import 
import { path } from "./gulp/config/path.js";
//import global plugins
import { plugins } from "./gulp/config/plugins.js";

//global var
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
};

//tasks import
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";


//watcher
function watcher () {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
};

const mainTasks = gulp.parallel(html, scss, js, images, fonts);
//scenario building
const dev = gulp.series(reset, mainTasks, watcher);

//default scenario
gulp.task('default', dev);
