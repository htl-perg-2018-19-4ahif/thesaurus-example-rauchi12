let LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('openthesaurus.txt');

 

let help:string []=process.argv.slice(2);
let args:string=help[0];

lr.on('error', function (err: any) {
    console.log(err);
});
    
lr.on('line', function (line: string) {
    let ar: string []=line.split(';');
    for(let i=0;i<ar.length;i++){
        if(ar[i]===args){
            console.log(line);
        }
    }
});
    
lr.on('end', function () {
    // All lines are read, file is closed now.
});