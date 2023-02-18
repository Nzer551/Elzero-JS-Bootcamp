// Lessons from 40>>>47 Assignments
// Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Solution
finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
