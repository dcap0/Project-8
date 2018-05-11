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
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const gulpSequence = require('gulp-sequence');
const browserSync = require('browser-sync');
/*~~ GULP TASKS~~*/

//delete the dist folder
gulp.task('cleanDist', function(){
    return gulp.src('dist/*',{read: false})
        .pipe(clean())
})

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
//optimize images
gulp.task('optimizeimg', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
//copy icons
gulp.task('icons', function(){
    gulp.src('src/icons/*')
    .pipe(gulp.dest('dist/icons'))
});

//copy icons 'svg' file content
gulp.task('iconsvg', function(){
    gulp.src('src/icons/svg/*')
    .pipe(gulp.dest('dist/icons/svg'))
});
//copies the html
gulp.task('copyhtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
});

gulp.task('default', gulpSequence('cleanDist' ,['copyhtml', 'scripts', 'styles', 'optimizeimg', 'icons', 'iconsvg'], 'server'))
