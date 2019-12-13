var fs = require('fs');

// DELET A FILE SYNC
//fs.unlinkSync('sample.txt');

// DELETE A FILE ASYNC
// fs.unlink('sample.txt',function(err){
//     console.log('deleted');
// });

// CREATE DIRECTORY SYNC
// fs.mkdirSync('sample');

// CREATE DIRECTORY ASYNC
// fs.mkdir('sample', function(err){
//     console.log('directory created!');
// })

// DELETE DIRECTORY SYNC
//fs.rmdirSync('sample');

// DELETE DIRECTORY ASYNC
// fs.rmdir('sample',function(){
//     console.log('directory has been removed!');
// });


// CREATING A DIRECTORY, READ A FILE , AND WRITE A FILE IN IT.
// fs.mkdir('stuff', function(err){
//     fs.readFile('app.js','utf8',function(err,data){
//         fs.writeFileSync('./stuff/writeMe.txt', data);
//     });
// });


// DELETE A FILE INSIDE THE DIRECTORY ASYNC AND DELETE THE DIRECTORY ITSELF.
// fs.unlink('./stuff/writeMe.txt',function(){
//     console.log('file removed!')
//     fs.rmdir('stuff',function(){
//         console.log('directory removed!');
//     });
// })
