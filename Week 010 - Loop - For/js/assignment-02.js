// Lessons from 48>>>53 Assignments
// Assignment 2
let start = 10;
let end = 0;
let stop = 3;

// Solution
for (let i = start; i > end; i--) {
  if (i < start) {
    console.log(`0${i}`);
    if (i === stop) {
      break;
    }
  } else {
    console.log(`${i}`);
  }
}

// Required Output
10
09
08
07
06
05
04
03
