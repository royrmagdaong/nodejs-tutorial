var events = require('events');

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('someEvent',function(msg,msg2){
    console.log(msg+msg2);
});

myEventEmitter.emit('someEvent','the event is emitted',', yipee!');