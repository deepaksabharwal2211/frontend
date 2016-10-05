const gulp = require('gulp');
var runSequence = require('run-sequence'); 
//var sass = require('gulp-sass');
//const sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch'); 
// gulp.task('sass', function () {
//   return gulp.src('sass/*.scss')
//    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('styles/css/'));
// });
// gulp.task('prefixer', () =>
//     gulp.src('styles/style.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );

 // gulp.task('default',function(callback){
 //  runSequence('prefixer','minifyCss',callback)
 // });

// gulp.task('styles', function () {
//    gulp.src('sass/*.scss')
//    .pipe(sass({style:'compressed'}))
//    .pipe(gulp.dest('styles/css/'));
// });
gulp.task('concatinating', function () {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css','styles/**/*.css'])
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('styles/dev'));
});
gulp.task('minifyCss', function() {
  return gulp.src('styles/bundle.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    //.pipe(rename("bundle.min.css"))
    .pipe(gulp.dest('styles/dev'));
});

gulp.task('watch', function () {
 // gulp.watch('sass/*.scss', ['sass']);
 // gulp.watch('styles/style.css',['prefixer']);
 gulp.watch(['bower_components/bootstrap/dist/css/bootstrap.css','styles/**/*.css'],['concatinating'])
  gulp.watch('styles/bundle.css',['minifyCss']);
 //gulp.watch('sass/*.scss',['styles']);
});

 gulp.task('default',['watch']);