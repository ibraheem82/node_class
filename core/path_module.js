const path = require('path');

// * [basename] get the base file name.
console.log(path.basename(__filename));

// * directory name
console.log(path.dirname(__filename));

// * File extension
console.log(path.extname(__filename));

//*  Create path object
console.log(path.parse(__filename).base);
console.log(path.parse(__filename));

// * Concatenate path, which is the current directory
console.log(path.join(__dirname, 'test', 'ibraheem.js'))