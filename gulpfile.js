const gulp = require('gulp')
const util = require('util')
const sass = require('gulp-sass')
const nano = require('gulp-cssnano')
const shell = require('gulp-shell')
const autoprefixer = require('gulp-autoprefixer')
const cp = require('child_process')
const browserSync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const argv = require('yargs').argv


gulp.task('styles', () => {
  return gulp.src(['./_assets/css_src/base.scss', './_assets/css_src/critical.scss', './_assets/css_src/amp.scss'])
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./_assets/css'))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./_assets/css/'))
})

gulp.task('buildSite',
  ['styles'],
  shell.task('JEKYLL_ENV=production jekyll build --config config/shared/_config.yml,config/production/_config.yml')
)

gulp.task('minify', ['buildSite'], () => {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('_site/'))
})

gulp.task('jekyll-build', shell.task(['jekyll build --watch --drafts --incremental --config config/shared/_config.yml']))

gulp.task('jekyll-serve', () => {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    port: 4000
  })
  gulp.watch('_assets/css_src/**/*.scss', ['styles'])
  gulp.watch('_site/**/*.*').on('change', browserSync.reload)
  gulp.watch('_assets/css/base.css').on('change', browserSync.reload)
})

gulp.task('default',
  ['jekyll-build', 'jekyll-serve', 'styles']
)
gulp.task('buildForProduction',
  ['styles', 'buildSite', 'minify']
)
