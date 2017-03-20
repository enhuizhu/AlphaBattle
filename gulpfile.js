const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
// const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const srcFiles = './src/**/*.js'

gulp.task('build', () => {
    return browserify('./src/main.js', {debug: true})
    	.transform(babelify)
    	.bundle()
    	.on('error', function(err) { console.error(err); this.emit('end'); })
    	.pipe(source('build.js'))
      	.pipe(gulp.dest('./dist/'));;
});

gulp.task('watch', () => {
	gulp.watch(srcFiles, ['build'])
});

gulp.task('default', ['build']);
