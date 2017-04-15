var path = require('path');
var gulp = require('gulp');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');

var files = {
  src: [
    './src/**/*.js',
  ],
};

// clean build files
gulp.task('clean', function(done) {
  rimraf.sync('./dist');
  done();
});

// build source files
gulp.task('build', function() {
  return gulp
    .src(files.src)
    .pipe(changed('./dist'))
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [
          'stage-0',
          'es2015',
          'react',
        ],
      }))
      .on('error', notify.onError({
        title: 'babel fail',
        message: '<%= error.message %>',
      }))
    .pipe(sourcemaps.write({
      includeContent: false,
      sourceRoot: function(file) {
        return path.resolve(__dirname, 'src');
      },
    }))
    .pipe(gulp.dest('./dist'));
});

// watching source files
gulp.task('watch', function() {
  gulp.watch(files.src, ['build']);
});

// run gulp tasks
gulp.task('default', function() {
  gulp.start('clean', 'build', 'watch');
});
