var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

var Paths = {
  HERE: './',
  CSS: './assets/css/',
  SCSS_SOURCES: './assets/scss/material-kit.scss',
  SCSS_ALL: './assets/scss/**/**',
  HTML: './**/*.html'
};

// 1. Compile SCSS and inject into browser
function compileScss() {
  return gulp.src(Paths.SCSS_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS))
    .pipe(browserSync.stream()); // This updates CSS without a full page refresh
}

// 2. Initialize the Server
function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000,
    notify: false,
    ghostMode: false // Prevents multiple tabs from scrolling together
  });
  done();
}

// 3. Watch for changes
function watchFiles() {
  gulp.watch(Paths.SCSS_ALL, compileScss);
  gulp.watch(Paths.HTML).on('change', browserSync.reload);
  gulp.watch("./assets/js/**/*.js").on('change', browserSync.reload);
}

// 4. Define the Task
// This will compile everything, start the server, and watch for changes
const build = gulp.series(compileScss, gulp.parallel(serve, watchFiles));

exports['open-app'] = build;
exports.default = build;