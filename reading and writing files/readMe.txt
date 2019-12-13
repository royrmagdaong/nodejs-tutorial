var fs = require('fs');

// READ AND WRITE FILE SYNCHRONOUSLY
// // read a file synchronously
// var readMe = fs.readFileSync('app.js', 'utf8');

// // write a file synchronously
// fs.writeFileSync('writeMe.txt',readMe);


// READ AND WRITE FILE ASYNCHRONOUSLY
fs.readFile('app.js','utf8', function(err,data){
    fs.writeFileSync('readMe.txt',data);
});