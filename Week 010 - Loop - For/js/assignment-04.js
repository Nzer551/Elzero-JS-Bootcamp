// Lessons from 48>>>53 Assignments
// Assignment 4
let index = 10;
let jump = 2;
let end = 0;

// Solution
for (;;) {
  if (index > jump) {
    console.log(index);
    index -= jump;
  } else {
    break;
  }
}

// Required Output
10
8
6
4
