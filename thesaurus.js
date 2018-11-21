var LineByLineReader = require('line-by-line'), lr = new LineByLineReader('openthesaurus.txt');
var help = process.argv.slice(2);
var args = help[0];
lr.on('error', function (err) {
    console.log(err);
});
lr.on('line', function (line) {
    var ar = line.split(';');
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] === args) {
            console.log(line);
        }
    }
});
lr.on('end', function () {
    // All lines are read, file is closed now.
});
