// 引入gulp模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const BrowserSync = require('browser-sync');

// 创建gulp任务
// gulp的构建是基于任务的，每一个操作都需要一个任务来执行
// 格式：gulp.task(name,taskFunction)
gulp.task('def', function() {
    // 在命令行运行gulp命令会执行这里的代码
    console.log('hello gulp');
});

// 任务1：压缩js代码
// 依赖：gulp-uglify
gulp.task('compress', function() {
    // 利用gulp.src()匹配要压缩的文件，返回一个**文件流**
    return gulp.src(['src/js/*.js'])

    // 压缩
    .pipe(uglify())

    // 改名
    .pipe(rename({
        suffix: ".min",
    }))

    .pipe(gulp.dest('./dist'))
});

// 任务2：编译ES6代码为ES5代码
// 依赖：gulp-babel, @babel/core, @babel/preset-env
gulp.task('es625', () => {
    return gulp.src('src/js/*.js')
        // 合并
        .pipe(concat('main.js')) //合并成这个文件main.js
        // Es6->ES5
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./dist/js'))

    // 压缩
    .pipe(uglify())

    // 改名
    .pipe(rename({
        suffix: ".min",
    }))

    .pipe(gulp.dest('./dist/js'))
})


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
gulp.task('autoSass', () => { //gulp
    //启动自动同步服务器
    BrowserSync({
        // server: './src/',

        //代理：利用browserSync服务器代理php服务器
        proxy: 'http://localhost:2020',

        //端口
        port: 2020,

        //监听文件
        files: ['./src/**/*.html', './src/css/*.css', './src/api/*.php']

    });
    gulp.watch('./src/**/*.scss', compileSass)
        // gulp.watch('./src/**/*.js',compileSass)
})