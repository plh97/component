const {
    curry
} = require('lodash');

//ok i give up use import
// import {
//     curry
// } from 'lodash';


// add.js
let add = x => y => x + y;



let match = curry((what, str) => {
    return str.match(what)
})

let replace = curry((waht,replacement,str)=>{
    return str.replace(what,replacement);
})


let filter = curry((f,ary,)=>{
    return ary.filter(f);
})

var map = curry(function(f, ary) {
    return ary.map(f);
});

let hasSpaces = match(/\s+/g);

console.log(
    filter(hasSpaces,["tori_spelling", "tori amos"])
);


// module.exports = match;