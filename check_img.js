const fs = require('fs');
const buffer = fs.readFileSync('src/assets/pet/spritesheet.webp');
console.log('Size:', buffer.length);
// Since Node doesn't have native image dimension parser for WebP easily without sharp or other libs,
// let's try using `file` command or `imagemagick` if installed.
