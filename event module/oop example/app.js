var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var peter = new Person('peter');
var luke = new Person('luke');
var people = [james, peter, luke];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said: '+msg);
    });
});

james.emit('speak','Hey dudes');
