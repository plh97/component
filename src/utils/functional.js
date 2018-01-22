// add.js
let add = (x, y) => {
    return x => {
        return x+y
    }
}
  

// let add = (x,y) => {
//     return x => {
//         return x+y
//     }
// }


module.exports = add;