var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');

gulp.task('default', function(){
  return gulp.src('./index.html')
  .pipe(inlineCss())
  .pipe(gulp.dest('build/'));
});
