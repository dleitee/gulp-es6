console.time('require');
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
console.timeEnd('require');

const $ = gulpLoadPlugins();

gulp.task('css', () => {
  return gulp.src('./src/css/*.styl')
    .pipe($.stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('img', () => {
  return gulp.src('./src/img/*')
    .pipe($.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['css', 'js', 'img'], () => {} );
