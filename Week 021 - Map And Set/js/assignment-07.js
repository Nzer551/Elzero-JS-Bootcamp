// Lessons from 123>>>133 Assignments
// Assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Solution One
console.log([...numsOne, ...numsTwo]);
// Solution Two
console.log([].concat(numsOne, numsTwo));
// Solution Three
console.log(Object.assign([], [...numsOne, ...numsTwo]));

// Needed Output
[1, 2, 3, 4, 5, 6]
