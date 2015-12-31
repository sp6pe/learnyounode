var fs = require('fs');

var lines = fs.readFileSync(process.argv[2], 'utf8');
console.log(lines.split("\n").length-1);