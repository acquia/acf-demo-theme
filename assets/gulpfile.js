/* jslint node: true */

'use strict'

const gulp = require('gulp')
const config = require('./config')

/**
 * Include Gulp plugins
 */
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
})
const fs = require('fs')
const moduleImporter = require('sass-module-importer')
const browserSync = require('browser-sync').create()
const del = require('del')

const development = $.environments.development

gulp.task('clean', function (cb) {
  del(cb)
})

/**
 * CSS from all SCSS.
 */
gulp.task('sass', function () {
  del([
    './public/css/*.css',
    './public/css/*.css.map'
  ], {force: true})

  return gulp.src('./src/static/css/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      importer: moduleImporter(),
      importOnce: {
        index: false,
        css: false,
        bower: false
      },
      indentedSyntax: true,
      noCache: false,
      lineNumbers: false,
      sourceMap: true,
      outputStyle: 'expanded',
      errLogToConsole: true
    }))
    .pipe($.base64())
    .pipe($.autoprefixer(config.autoprefixerOptions))
    .pipe(development($.sourcemaps.write()))
    .pipe(gulp.dest('./public/css'))
})

/**
 * Concat javascript.
 */
gulp.task('compress', function () {
  del([
    './public/js/*.js',
    './public/js/*.js.map'
  ], {force: true})

  return gulp.src([
    './src/static/js/**/*.js'
  ])
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    .pipe($.uglify())
    .on('error', function (error) {
      this.emit('end')
    })
    .pipe($.concat('scripts.js'))
    .pipe(development($.sourcemaps.write()))
    .pipe(gulp.dest('./public/js'))
})

/**
 * SVG files.
 */
gulp.task('svg', function () {
  del([
    './public/svg/*.svg'
  ], {force: true})

  return gulp.src('./src/static/svg/**/*.svg')
    .pipe($.svgSprite({
      shape: {
        id: {
          separator: '__'
        },
        dest: './'
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .on('error', function (error) {
      this.emit('end')
    })
    .pipe(gulp.dest('./public/svg'))
})

/**
 * Image files.
 */
gulp.task('img', function () {
  del([
    './public/images/*.png'
  ], {force: true})

  return gulp.src('./src/static/images/**/*.png')
    .pipe(gulp.dest('./public/images'))
})

/**
 * Browser Sync.
 */
gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: config.browserSync.hostname,
    port: config.browserSync.port,
    open: config.browserSync.openAutomatically,
    reloadDelay: config.browserSync.reloadDelay,
    injectChanges: config.browserSync.injectChanges,
    online: config.browserSync.online,
    ui: config.browserSync.ui
  })
})

/**
 * Watcher task.
 */
gulp.task('watch', function () {
  // watch scss for changes
  gulp.watch(['./src/**/*.scss'], ['sass'])
    .on('change', browserSync.reload)

  // watch js for changes
  gulp.watch(['./src/**/*.js'], ['compress'])
    .on('change', browserSync.reload)

  // watch svg for changes
  gulp.watch(['./src/**/*.svg'], ['svg'])
    .on('change', browserSync.reload)

  // watch images for changes
  gulp.watch(['./src/**/*.png'], ['img'])
    .on('change', browserSync.reload)

  // If user has specified an override
  if (!config.twig.useCache) {
    gulp.watch(['../templates/**/*.twig'])
      .on('change', browserSync.reload)
  }
})

gulp.task('build', ['sass', 'compress', 'svg', 'img'])
gulp.task('default', ['browser-sync', 'watch'])
