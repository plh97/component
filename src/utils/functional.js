const {
    curry,
    reduce
} = require('lodash');


let compose = (x,y) => g => x(y(g))


var hi = e => e+"hi~"


// var add1 = 
var last = compose(head, reverse);

module.exports = last;