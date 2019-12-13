var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/roy.png');
var myWriteStream = fs.createWriteStream(__dirname + '/roy-copy.png');

myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});