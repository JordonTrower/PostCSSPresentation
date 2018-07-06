const gulp = require('gulp');
const postcss = require('gulp-postcss')
const precss = require('precss')
const autoPrefixer = require('autoprefixer')
const rucksack = require('rucksack-css');
const postcssPresetEnv = require('postcss-preset-env');
const troll = require('postcss-trolling')

gulp.task('default', () => {

	const plugins = [
		precss(),
		autoPrefixer(),
		rucksack(),
		postcssPresetEnv(),
		troll({
			aling: false,
			blur: false,
			blurBlink: false,
			clearfix: false,
			comicSans: true,
			heigth: false,
			hideCursor: false,
			hideOdd: false,
			ms: false,
			ren: false,
			rotate: {
				deg: 1
			},
			roulette: 4,
			slowlyGrowText: {
				time: '300s',
				maxFontSize: '80pt'
			},
			veryImportant: false,
			wait: true,
			zIndex: false
		})
	]

	return gulp.src('./src/css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dest'))
})