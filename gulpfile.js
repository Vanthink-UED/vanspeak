// gulpfile
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');




gulp.task('js', function () {
  gulp.src('./src/**/**.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('webserver', function () {
  gulp.src('./demo/')
    .pipe(webserver({
      fallback: './index.html',
      livereload: true,
      port: 9001,
      directoryListing: false,
      open: true,
      host: '0.0.0.0'
    }));
});




gulp.task('default', function () {
  //gulp.run('css');
  // gulp.run('js');
});