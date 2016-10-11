// gulpfile
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var path = require('path');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var css2js = require("gulp-css2js");
var concat = require('gulp-concat');

var targetName = 'van_speak';

gulp.task('css', function () {
  return gulp.src('./src/**/*.css')
    .pipe(concat(targetName + '.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/'));
});

gulp.task('js', function () {
   gulp.src('./src/**/**.js')
      .pipe(concat(targetName + '.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./build/'))
});

gulp.task('webserver', function() {
  gulp.src('./demo/')
    .pipe(webserver({
      fallback: './index.html',
      livereload: true,
      port: 9000,
      directoryListing: false,
      open: true
    }));
});

gulp.task('css2js',function() {
  gulp.src("./src/**/*.css")
    .pipe(css2js())
    .pipe(gulp.dest("./src/"));
})



gulp.task('default', function(){
    //gulp.run('css');
    gulp.run('css2js');

    gulp.run('js');

});
