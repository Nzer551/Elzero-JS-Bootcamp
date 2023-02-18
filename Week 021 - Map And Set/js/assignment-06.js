// Lessons from 123>>>133 Assignments
// Assignment 6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let charsArray = [];
let numbersArray = [];
let finalArray = [];

// Solution
function swapNumberAndReplace(mixedArray) {
  mixedArray.forEach((element) => {
    if (typeof element === "number") {
      numbersArray.push(element);
    } else {
      charsArray.push(element);
    }
    finalArray = [...numbersArray, ...charsArray];
    if (numbersArray.length !== 0) {
      finalArray.copyWithin(0, numbersArray.length, 2 * numbersArray.length);
    }
  });
}

swapNumberAndReplace(chars);
console.log(finalArray);

// Needed Output
/* 
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
*/
