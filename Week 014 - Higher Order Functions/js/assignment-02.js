// Lessons from 71>>>78 Assignments
// Assignment 2
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Solution
let flat = myArray
  .reduce(function (accumulator, current) {
    return accumulator.concat(current);
  }, [])
  .join("");

console.log(flat); // Elzero
