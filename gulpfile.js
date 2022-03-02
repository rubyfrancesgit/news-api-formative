// gulpfile containers a list of intsructions for gulp to do

const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

// cb is callback as the argument from gulp - you just need to pass something through the parameters that comes from the gulp libraries
function generateCSS(cb) {
    console.log("callback");
    // src goes and finds a file
    src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
    cb();
}

exports.css = generateCSS;

function watchFiles(cb) {
    // the watch function takes two arguments, which files to be watched & the callback/function to be triggered after change
    watch('./sass/**/*.scss', generateCSS)
}

exports.watch = watchFiles;