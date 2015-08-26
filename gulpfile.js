'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var plumber = require('gulp-plumber');


// BrowserSync & Server
gulp.task('bs', function() {
  browserSync({
    server: {
      baseDir: './bower.json'
    }
  });
});

/**
 * Build
 */
gulp.task('build:html', function() {
  gulp.src('./assets/*.html')
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('build:css', function() {
  gulp.src('./assets/sass/*.scss', { style: 'expanded' })
    .pipe(plumber())
    .pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: './public/css/',
        sass: './assets/sass/'
    }))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('image', function() {
 gulp.src('./assets/images/**')
  .pipe(newer('./assets/images/**'))
  .pipe(imagemin({
      optimizationLevel: 3
    }))
.pipe(gulp.dest('./public/images/'))
.pipe(browserSync.reload({ stream:true }));
});

/**
 * Watch
 */
gulp.task('watch', function() {
  gulp.watch(
    './assets/*.html', 
    ['build:html']);

  gulp.watch(
    './assets/sass/*.scss', 
    ['build:css']);

  gulp.watch(
    './assets/images/**', 
    ['image']);
});


// 開発
gulp.task('default', ['image', 'build:html', 'build:css', 'bs', 'watch']);