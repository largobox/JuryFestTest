'use strict';

const   gulp = require('gulp');
const   sass = require('gulp-sass');
const  babel = require('gulp-babel');
const concat = require('gulp-concat');

const bs = require('browser-sync').create();

gulp.task('sass', function(){
	gulp.src('src/css/all.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));	
});

gulp.task('jsx', function(){
	gulp.src(['src/js/nav.jsx', 'src/js/about.jsx', 'src/js/jury.jsx', 'src/js/add_form.jsx', 'src/js/footer.jsx', 'src/js/app.jsx'])
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', function(){
	bs.init({
		server: '.'
	});	

	gulp.watch('src/css/**/*.*', ['sass']);
	gulp.watch('src/js/*.*', ['jsx']);

	bs.watch(['index.html', 'dist/*.*']).on('change', bs.reload);
});

gulp.task('default',['serve']);

