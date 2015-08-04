const gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  shell = require('gulp-shell'),
  fs = require('fs'),
  path = require('path'),
  os = require('os');


gulp.task('lint-ci', function () {

  const testReportFolder = process.env.CIRCLE_TEST_REPORTS || 'test_output';
  const outputStream = fs.createWriteStream(path.join(testReportFolder, 'eslint', 'eslint.xml'));


  return gulp.src(['ReactApp/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format('junit', outputStream))
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failAfterError());
});


gulp.task('lint', function () {
  return gulp.src(['ReactApp/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failAfterError());
});


gulp.task('clear-cache', function () {
  // Clear react-packager cache

  const tempDir = os.tmpdir();

  const cacheFiles = fs.readdirSync(tempDir).filter(function (fileName) {
    return fileName.indexOf('react-packager-cache') === 0;
  });

  cacheFiles.forEach(function (cacheFile) {
    const cacheFilePath = path.join(tempDir, cacheFile);
    fs.unlinkSync(cacheFilePath);
    console.log('Deleted cache: ', cacheFilePath);
  });

  if (!cacheFiles.length) {
    console.log('No cache files found!');
  }
});


gulp.task('bundle', shell.task([
  'react-native bundle'
]));
