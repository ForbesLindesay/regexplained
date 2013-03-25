# regexplained

The module for rendering diagrams on regexplained.co.uk

This module is designed to work on the client side in browserify.  If anyone can submit a pull request that makes this work in node.js as well (with decent cross platform support) I'll gladly accept it.

## Usage

index.js

```javascript
var regexplained = require('regexplained');
var paperContainer = document.getElementById('container');
regexplained(paperContainer, '[0-9][0-9][a-z]+', function(e) {
    if (e) {
      alert(e.stack || e.message);
      throw e;
    } else {
      //done
    }
  });
```

index.html

```html
<div id="container"></div>
<script src="bundle.js"></script>
```

In a console:

```
$ npm install regexplained
$ browserify index.js > bundle.js
```

## License

MIT