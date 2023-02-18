// Lessons from 123>>>133 Assignments
// Assignment 1
// Solution
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());

// Needed Output
/*
Set(3) {10, 20, 2}
2
*/
