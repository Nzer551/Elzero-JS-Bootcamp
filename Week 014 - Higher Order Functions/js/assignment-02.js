// Lessons from 71>>>78 Assignments
// Assignments 2
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flat = myArray.reduce(function (accumulator, current) {
  return accumulator.concat(current);
}, []).join("");

console.log(flat); // Elzero
