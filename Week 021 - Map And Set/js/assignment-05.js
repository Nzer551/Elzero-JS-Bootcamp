// Lessons from 123>>>133 Assignments
// Assignment 5
let theName = "Elzero";

// Solution One
console.log(theName.split(""));
// Solution Two
console.log([].concat(...theName));
// Solution Three
console.log([...theName]);
// Solution Four
console.log(Array.from(theName));
// Solution Five
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
