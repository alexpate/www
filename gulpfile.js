var gulp          = require('gulp');
var util          = require('util');
var sass          = require('gulp-sass');
var nano          = require('gulp-cssnano');
var shell         = require('gulp-shell');
var autoprefixer  = require('gulp-autoprefixer');
var cp            = require('child_process');
var browserSync   = require('browser-sync').create();
var htmlmin       = require('gulp-html-minifier');
var rename        = require('gulp-rename');


gulp.task('styles', function() {
  return gulp.src('./_assets/css_src/base.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./_assets/css'))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./_assets/css/'))
});


gulp.task('buildSite', shell.task('bundle exec jekyll build'));

gulp.task('minify', ['buildSite'], function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhiteSpace: true,
      removeTagWhitespace: true,
      lint: true,
      minifyJS: true
      }))
    .pipe(gulp.dest('_site'));
});

gulp.task('jekyll-build', shell.task(['jekyll build --watch']));
gulp.task('jekyll-build-once', ['buildSite', 'minify']);

gulp.task('jekyll-serve', function() {
  browserSync.init({ server: { baseDir: '_site/' }, port: 4000 });
  gulp.watch('_assets/css_src/**/*.scss', ['styles']);
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
  gulp.watch('_assets/css/base.css').on('change', browserSync.reload);
});

gulp.task('default', ['jekyll-build', 'jekyll-serve', 'styles']);
gulp.task('build', ['styles', 'jekyll-build-once']);