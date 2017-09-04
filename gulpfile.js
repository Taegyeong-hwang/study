const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존선을 여기 씁니다.

gulp.task('default',function(){
	gulp.src("es6/**/**,js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));
	// 브라우저 소스
	
	gulp.src("public.es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
});
