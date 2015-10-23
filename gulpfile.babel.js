console.time('require')
import gulp from 'gulp'
import stylus from 'gulp-stylus'
import uglify from 'gulp-uglify'
import imagemin from 'gulp-imagemin'
console.timeEnd('require')

gulp.task('css', () => {
  return gulp.src('./src/css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
})

gulp.task('img', () => {
  return gulp.src('./src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('./build/img'))
})

gulp.task('default', ['css', 'js', 'img'], () => {})
