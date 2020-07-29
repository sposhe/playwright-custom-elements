// packages
const bsync   = require('browser-sync').create()
const indexer = require('component-indexer')

// gulp
const { src, dest, series, parallel, watch } = require('gulp')

// gulp plugins
const pug                 = require('gulp-pug')
const sass                = require('gulp-sass')
const rename              = require('gulp-rename')
const cleanCSS            = require('gulp-clean-css')
const autoprefixer        = require('gulp-autoprefixer')
const htmlbeautify        = require('gulp-html-beautify')
const sassExtendShorthand = require('gulp-sass-extend-shorthand')

// helpers
const paths = (base, folders) => folders.map(folder => base + '/' + folder)

// config
const destination = 'docs'
const pugIndex = paths('src/pug', ['mixins'])
const sassIndex = paths('src/scss', ['partials', 'vendor', 'mixins'])
const locals = {}

// pug
function pugIndexer(cb) {
  pugIndex.forEach(path => indexer(path, 'pug'))
  cb()
}
function pugCompile() {
  return src([
    'src/pug/views/**/*.pug'
  ]).pipe( pug({ locals }) )
    .pipe( htmlbeautify({ indent_size: 2 }) )
    .pipe( dest(destination) )
    .pipe( bsync.reload({ stream: true }) )
}
function pugWatch(cb) {
  watch(['src/pug/**/*.pug', '!**/_index.*'], series(pugIndexer, pugCompile))
  cb()
}

// sass
function sassIndexer(cb) {
  sassIndex.forEach((dir) =>  indexer(dir, 'scss'))
  cb()
}
function sassShorthand() {
  return src([
    'src/scss/**/%*.+(sass|scss|css)'
  ]).pipe( sassExtendShorthand() )
    .pipe( rename(function(path) {
      path.basename = path.basename.replace('%','_')
      console.log(path.basename)
    }) )
    .pipe( dest(file => file.base) )
}
function sassCompile() {
  return src([
    'src/scss/**/*.+(sass|scss|css)',
    '!**/_*.*',
    '!**/%*'
  ]).pipe( sass({ includePaths: ['node_modules'] }) )
    .pipe( autoprefixer() )
    .pipe( cleanCSS() )
    .pipe( dest(`${destination}/css`) )
    .pipe( bsync.reload({ stream: true }) )
}
function sassWatch(cb) {
  watch([
    'src/scss/**/%*.*'
  ], series(sassShorthand))
  watch([
    'src/scss/**/*.+(sass|scss)',
    '!**/%*',
    '!**/_index.*'
  ], series(sassIndexer, sassCompile))
  cb()
}

// browsersync
function sync() {
  bsync.init({
    server: { baseDir: `./${destination}` }
  })
}

// exports
exports.pug     = series(pugIndexer, pugCompile)
exports.sass    = series(sassShorthand, sassIndexer, sassCompile)
exports.build   = parallel(exports.pug, exports.sass)
exports.watch   = series(pugWatch, sassWatch)
exports.default = series(exports.build, exports.watch, sync)
