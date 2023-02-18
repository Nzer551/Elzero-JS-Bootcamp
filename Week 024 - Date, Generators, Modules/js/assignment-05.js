// Lessons from 159>>>168 Assignments
// Assignment 5
// Solution
let start = performance.now();

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let end = performance.now();
let interval = end - start;

console.log(`Loop Took ${interval.toFixed()} Milliseconds.`);
