var gulp = require('gulp');
// var watch = require('gulp-watch');
// var sass = require('gulp-sass');
// var mini = require('gulp-minify-css');
// var prune = require('gulp-prune');
// var newer = require('gulp-newer');


// gulp.task('sass', function () {
//   return gulp.src('./src/assets/styles/sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/assets/styles/css'));
// });

// gulp.task('mini', ['sass'], function () {
//     gulp.src('./src/assets/styles/css/*.css')
//     .pipe(mini())
//     .pipe(gulp.dest('./dist/assets/styles/css'))
// });


gulp.task('copy', function() {
    gulp.src(['./src/**', '!./src/assets/styles/**', './src/*'])
    .pipe(gulp.dest('./dist/'))
}); 

// gulp.task('prune', ['copy'], function() {
//     gulp.src('./src/**')
//     .pipe(prune('./dist/')) 
//     .pipe(newer('./dist/'))   
//     .pipe(gulp.dest('./dist'))   
// }); 

 
gulp.task('default', function () { 
    gulp.watch('./src/**', ['copy']); 
});  