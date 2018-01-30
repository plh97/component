const R = require('ramda');


let compose = (x,y) => g => x(y(g))

let add2 = R.add(2);


var addOne = x => x + 1;
var square = x => x * x;

let yourself = R.curry(addOne,square)

module.exports = yourself;