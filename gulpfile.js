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
		postcssPresetEnv(),
		trolling({
			aling: false,
			blur: false,
			blurBlink: false,
			clearfix: false,
			comicSans: false,
			heigth: false,
			hideCursor: false,
			hideOdd: false,
			ms: false,
			ren: false,
			rotate: false,
			slowlyGrowText: false,
			verImportant: false,
			wait: false,
			zIndex: false
		})
	]

	return gulp.src('./src/css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dest'))
})