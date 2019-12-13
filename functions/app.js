// normal function statement
function sayHi(){
    console.log('hi');
}
//sayHi();

// function Expression
var sayBye = function(){
    console.log('Bye');
}
//sayBye();




// passing function variable in a function
function callAFunction(func){
    func();
}
callAFunction(sayBye);

