'use strict';

var app = require('../app.js'),
  will = require('willy').will;

describe('replacing tokens', function () {
  it('should return a string with the tokens replaced', function () {
    will(app.template('foo {{bar}} baz {{quux}}', { bar: 'X', quux: 'Y' })).
      be('foo X baz Y');
  });
});
