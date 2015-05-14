'use strict';

var template = function (template, values) {
  Object.keys(values || {}).forEach(function (token) {
    template = template.replace(
      new RegExp('\\{\\{' + token + '\\}\\}', 'g'),
      values[token]);
  });

  return template;
};


module.exports = {
  template: template
};