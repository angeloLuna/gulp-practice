var gulp = require('gulp');
var prune = require('gulp-prune');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var mini = require('gulp-minify-css');
var livereload = require('gulp-livereload');
// Tarea para copiar src a dist
gulp.task('copy', function() {
    gulp.src(['src/**/*', '!src/assets/styles/**/'])
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
}); 
// Tarea para borrar archivos de dist cuando se borran en src
gulp.task('prune', ['copy'], function() {
    gulp.src(['src/**/*', '!src/assets/styles/**/'])
    .pipe(prune('dist/')) 
    .pipe(newer('dist/'))   
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
}); 

gulp.task('sass', function () {
  return gulp.src('src/assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/'))
    .pipe(livereload());
});

gulp.task('mini', ['sass'], function () {
    gulp.src('src/assets/styles/sass/*.css')
    .pipe(mini())
    .pipe(gulp.dest('dist/assets/styles/css'))
    .pipe(livereload());
});

gulp.task('default', function () {
    livereload({ start: true })
    livereload.listen()
    gulp.watch('src/**/*', ['copy', 'prune', 'sass', 'mini']); 
});  
