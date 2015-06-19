// 载入外挂
var gulp = require('gulp'),  
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber');

// 样式
gulp.task('styles', function() {  
  return gulp.src('static/css/style.css')
    //.pipe(sass({ style: 'expanded', }))
    .pipe(plumber()) //plumber给pipe打补丁
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function() {  
  return gulp.src('static/js/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    //.pipe(concat('main.js'))
    .pipe(plumber()) //plumber给pipe打补丁
    .pipe(gulp.dest('public/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(livereload())
    .pipe(notify({ message: 'Scripts task complete' }));
});

//库
gulp.task('scirpt_lib', function() {  
	return gulp.src('./bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('public/js/lib/'));
});

// 图片
gulp.task('images', function() {  
  return gulp.src('static/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/img'))
    .pipe(livereload())
    .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {  
  return gulp.src(['public/css', 'public/js', 'public/img'], {read: false})
    .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {  
    gulp.start('styles', 'scripts', 'images','scirpt_lib');
});


gulp.task('watch', function() {

  livereload.listen();
  gulp.watch('static/css/*.css', ['styles']);


  gulp.watch('static/js/*.js', ['scripts']);


  gulp.watch('static/img/*', ['images']);

});