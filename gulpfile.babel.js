import gulp from 'gulp'
import del from 'del'
import cached from 'gulp-cached'
import remember from 'gulp-remember'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import eslint from 'gulp-eslint'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import { basename } from 'path'
import config from './jshonkers.config'

const __PUBLIC__ = basename(config.__PUBLIC__)

gulp.task('build:styles', () => {
	return gulp.src([`**/${__PUBLIC__}/css/*.s+(a|c)ss`, '!node_modules/**'])
		.pipe(cached('styles'))
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(remember('styles'))
		.pipe(gulp.dest('.'))
})

gulp.task('build:scripts', () => {
	return gulp.src([`**/${__PUBLIC__}/js/*.js`, `!**/${__PUBLIC__}/js/*.min.js`, '!node_modules/**'])
		.pipe(cached('scripts'))
		.pipe(sourcemaps.init())
		.pipe(eslint())
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(remember('scripts'))
		.pipe(gulp.dest('.'))
})

gulp.task('default', ['build:styles', 'build:scripts'])

gulp.task('watch', () => {
	function deleted(event, name) {
		if (event.type === 'deleted') {
			delete cached.caches[name][event.path]
			remember.forget(name, event.path)
		}
	}

	gulp.watch([`**/${__PUBLIC__}/css/*.s+(a|c)ss`, '!node_modules/**'], ['build:styles'])
		.on('change', event => deleted(event, 'styles'))

	gulp.watch([`**/${__PUBLIC__}/js/*.js`, '!node_modules/**'], ['build:scripts'])
		.on('change', event => deleted(event, 'scripts'))
})

gulp.task('clean', () => {
	del([
		`**/${__PUBLIC__}/css/*.min.*`,
		`**/${__PUBLIC__}/js/*.min.*`,
		'!node_modules/**'
	])
})
