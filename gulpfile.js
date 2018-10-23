var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function(){
    return gulp.src('css/*.less')
      .pipe(less())
      .pipe(gulp.dest('build/css'))
});


gulp.task('default', [ 'css' ]);