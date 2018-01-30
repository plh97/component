const R = require('ramda');


let compose = (x,y) => g => x(y(g))

let add2 = R.add(2);

var hi = e => e+"hi~"


// var add1 = 
var last = compose(head, reverse);

let yourself = R.curry(addOne,square)

module.exports = yourself;