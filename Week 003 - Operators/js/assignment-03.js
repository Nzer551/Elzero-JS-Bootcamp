// Lessons from 18>>>22 Assignments
// Assignment 3

let num = "10";

// Solution One
console.log(+num * (true + true)); // 20

// Solution Two
console.log(+num + +num); // 20

// Solution Three
console.log((+num * +num) / (+num/(true + true))); // 20

// Solution Four
console.log(++num + --num - true); // 20

// Solution Five
console.log(--num + ++num + true); // 20