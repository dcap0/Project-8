'use strict';

/*~~ NPM PACKAGES ~~*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

/*~~ GULP TASKS~~*/

//Concat and Minify JS, move in dist
gulp.task('scripts', function (){
    return gulp.src(['src/js/global.js', 'src/js/circle/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('dist'))
            .pipe(rename('all.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});

//Compile to CSS, Concat and Minify, move to dist
gulp.task('styles', function(){
    return gulp.src(['src/sass/*.sass', 'src/sass/circle/*.sass', 'src/sass/circle/components/*.sass', 'src/sass/circle/core/*.sass'])
        .pipe(sourcemaps.init())
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(concat('style.css'))
            .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});
