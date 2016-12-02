var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function(){
	gulp.src('ea-test-server/css/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('ea-test-server/assets'))
});