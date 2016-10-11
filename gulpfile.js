// gulpfile
var gulp = require('gulp');
var uglify = require('gulp-uglify');

var webserver = require('gulp-webserver');




gulp.task('js', function () {
   gulp.src('./src/**/**.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/'))
});

gulp.task('webserver', function() {
  gulp.src('./demo/')
    .pipe(webserver({
      fallback: './index.html',
      livereload: true,
      port: 9001,
      directoryListing: false,
      open: true
    }));
});




gulp.task('default', function(){
    //gulp.run('css');
   // gulp.run('js');
});
