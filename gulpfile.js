console.time('require');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
console.timeEnd('require');

gulp.task('css', function () {
  return gulp.src('./src/css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('img', function () {
  return gulp.src('./src/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['css', 'js', 'img'], function(){

});
