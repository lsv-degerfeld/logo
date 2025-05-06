const gulp = require('gulp');
const rename = require('gulp-rename');
const pug = require('gulp-pug');

gulp.task('build', function () {
  return gulp
    .src('./*.pug')
    .pipe(pug())
    .pipe(
      rename(function (path) {
        path.extname = '.svg';
      })
    )
    .pipe(gulp.dest('./dist'));
});
