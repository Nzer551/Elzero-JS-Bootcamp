// Lessons from 71>>>78 Assignments
// Assignments 3
let myString = "EElllzzzzzzzeroo";
let myStr = myString.split("").filter(function (element, index, arr) {
  return arr.indexOf(element) === index;
}).join("");

console.log(myStr); // Elzero
