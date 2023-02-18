// Lessons from 10>>>17 Assignments
// Assignment 1
// Solution
let numberOne = 10,
  numberTwo = 20;

// Output
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/
console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
