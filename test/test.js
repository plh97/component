
window.color='red';
var o = {color:"blue"}

function sayColor(){
  return this.color
}

var objectSayColor = sayColor.bind(o);
console.log(
  objectSayColor()
);
