// Lessons from 147>>>156 Assignments
// Assignment 5

let start = performance.now();

for(let i = 1; i <= 10; i++) {
  console.log(i);
}

let end = performance.now();
let interval = end - start;

console.log(`Loop Took ${interval.toFixed()} Milliseconds.`);
