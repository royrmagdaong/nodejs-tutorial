// Option number 1

// var adder = function(a,b){
//     return `the sum of two numbers is ${a+b}`;
// }

// var subtracter = function(a,b){
//     return `the difference of two numbers is ${a-b}`;
// }

// var greet = function(time){
//     return `Good ${time}`;
// }

// module.exports.adder = adder;
// module.exports.subtracter = subtracter;
// module.exports.greet = greet;




// Option number 2, it works the same

// module.exports.adder = function(a,b){
//     return `the sum of two numbers is ${a+b}`;
// }

// module.exports.subtracter = function(a,b){
//     return `the difference of two numbers is ${a-b}`;
// }

// module.exports.greet = function(time){
//     return `Good ${time}`;
// }





// Option number 3, still works the same

var adder = function(a,b){
    return `the sum of two numbers is ${a+b}`;
}

var subtracter = function(a,b){
    return `the difference of two numbers is ${a-b}`;
}

var greet = function(time){
    return `Good ${time}`;
}

module.exports = {
    adder: adder,
    subtracter: subtracter,
    greet: greet
}