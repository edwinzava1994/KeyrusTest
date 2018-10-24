var gulp = require('gulp');
var less = require('gulp-less');
var open = require('gulp-open');
var connect = require('gulp-connect');

gulp.task('css', function(){
    return gulp.src('css/*.less')
      .pipe(less())
      .pipe(gulp.dest('build/css'))
});
gulp.task('open', function(){
  var options = {
    uri: 'http://localhost:3000'
  };
  gulp.src('./')
    .pipe(open(options));
});

gulp.task('connect', function() {
  connect.server({
    port: 3000
  });
});


gulp.task('default', [ 'css', 'open', 'connect' ]);