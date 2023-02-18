// Higher Order Function Challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",").filter(function (element, index, arr) {
  return isNaN(parseInt(element)) && index !== arr.length - true;
}).join("").split("").map(function (element, index) {
  return index < element.length ? "" : element;
}).reduce(function (accumulator, current) {
  return current !== "_" ? `${accumulator}${current}` : `${accumulator} ` ;
});

console.log(solution); // Elzero Web School
