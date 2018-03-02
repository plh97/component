const R = require('ramda');


const compose = (x, y) => g => x(y(g));

const add2 = R.add(2);

const hi = e => `${e}hi~`;


// var add1 =
const last = compose(head, reverse);

const yourself = R.curry(addOne, square);

module.exports = yourself;
