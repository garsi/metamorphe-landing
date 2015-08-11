var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');


//Compile less into css
gulp.task('less', function () {
  return gulp.src('./less/**/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

//Minify css
gulp.task('minify-css', function() {
  return gulp.src('./css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

//Watch & refresh fresh code
/*gulp.task('webserver', function() {
  gulp.src('root')
    .pipe(webserver({
      fallback: 'index.html',
      host: 'localhost',
      path: '/',
      livereload: false,
      directoryListing: true,
      open: 'index.html' 
    }));
});*/