var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function(){
	nodemon({
		script: 'ea-test-server/server.js',
		ext: 'js',
		ignore: ['ng*', 'gulp*', 'assets*']
	});
});