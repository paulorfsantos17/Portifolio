const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const uglify = require('gulp-uglify')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)

