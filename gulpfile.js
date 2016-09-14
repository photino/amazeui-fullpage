'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var docUtil = require('amazeui-doc-util');
var runSequence = require('run-sequence');
var tasks = require('amazeui-gulp-tasks');

var config = {
  pkg: require('./package.json'),

  // release task
  ghPages: {
    src: 'dist/**/*'
  },

  // remote branch
  git: {
    branch: 'master'
  },

  browserSync: {
    notify: false,
    server: 'dist',
    logPrefix: 'AMP'
  },

  // watch files and reload browserSync
  bsWatches: 'dist/**/*',

  // docs:md
  md: {
    src: ['README.md', 'docs/*.md'],
    data: {
      pluginTitle: 'Amaze UI Fullpage',
      pluginDesc: 'Amaze UI风格的单页滚动效果',
      buttons: 'photino/amazeui-fullpage',
      head: '<link rel="stylesheet" href="../amazeui-fullpage.min.css"/>'
    },
    rename: function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    },
    dist: function(file) {
      if (file.relative === 'index.html') {
        return 'dist'
      }
      return 'dist/docs';
    }
  },

  // compile less
  less: {
    src: './src/amazeui.fullpage.less',
    dist: './dist',
    banner: true
  },

  // uglify js
  uglify: {
    src: './src/amazeui.fullpage.js',
    dist: './dist',
    banner: true
  },

  // clean path
  clean: 'dist'
};

// init tasks
tasks(gulp, config);

gulp.task('build', function (callback) {
  runSequence('clean', ['less', 'uglify', 'markdown'], callback);
});

gulp.task('default', ['build', 'server']);

gulp.task('publish', ['build', 'release']);

