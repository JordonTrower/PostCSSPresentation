const gulp = require('gulp');
const postcss = require('gulp-postcss')
const precss = require('precss')
const autoPrefixer = require('autoprefixer')
const maccaCss = require('postcss-australian-stylesheets');
const rucksack = require('rucksack-css');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('postcss', () => {

	const plugins = [
		precss(),
		autoPrefixer(),
		maccaCss(),
		rucksack(),
		postcssPresetEnv()
	]

	return gulp.src('./src/css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dest'))
})