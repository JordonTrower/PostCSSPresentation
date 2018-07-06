const gulp = require('gulp');
const postcss = require('gulp-postcss')
const precss = require('precss')
const autoPrefixer = require('autoprefixer')
const rucksack = require('rucksack-css');
const postcssPresetEnv = require('postcss-preset-env');


gulp.task('default', () => {

	const plugins = [
		precss(),
		autoPrefixer(),
		rucksack(),
		postcssPresetEnv()
	]

	return gulp.src('./src/css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dest'))
})