// 引入gulp模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const BrowserSync = require('browser-sync');
// 修改sass编译器（默认为：node-sass）;
// sass.compiler = requier('sass');

// 编译Sass
const compileSass = function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compact', //nested(默认）,expanded：展开,compact：单行,compressed：压缩
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
}
gulp.task('compileSass', compileSass)

// 监听sass，并实现自动编译
gulp.task('default', () => {
    //启动自动同步服务器
    BrowserSync({
        server: './src/',
        //端口
        port: 2020,
        //监听文件:页面跟随被监听文件的修改
        files: ['./src/**/*.html', './src/css/*.css', './src/api/*.php']
    });
    gulp.watch('./src/**/*.scss', compileSass)
        // gulp.watch('./src/**/*.js',compileSass)
})