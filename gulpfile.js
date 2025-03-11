const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function buildStyles() {
    return src('src/scss/**/*.scss') // Adjust source path as needed
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist/css'));
}

function watchTask() {
    watch('src/scss/**/*.scss', buildStyles);
}

exports.default = series(buildStyles, watchTask);