```js

var template = require('template');

var source = 'foo {{bar}} baz {{quux}}';
var values = { bar: 'X', quux: 'Y' };

console.log(template.template(source, values));  // 'foo X baz Y';
```