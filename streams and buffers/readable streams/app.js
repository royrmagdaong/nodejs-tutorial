var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/roy.png');

myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
})