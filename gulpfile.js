/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const fs = require('fs');
const gulp = require('gulp');
const mocha = require('gulp-spawn-mocha');

gulp.task('test', function() {
  return gulp.src('lib/test/*_test.js', {read: false}).pipe(mocha({
    ui: 'tdd',
    reporter: 'spec',
  }))
});
