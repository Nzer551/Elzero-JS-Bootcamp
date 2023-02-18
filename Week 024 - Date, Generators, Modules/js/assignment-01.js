// Lessons from 159>>>168 Assignments
// Assignment 1
// Solution
let dateNow = new Date();
let birthDate = new Date("Nov 2 94");
let différenceDate = dateNow - birthDate;

console.log(`"${Math.floor(différenceDate / 1000 / 60)} Minutes"`);
console.log(`"${Math.floor(différenceDate / 1000 / 60 / 60)} Hours"`);
console.log(`"${Math.floor(différenceDate / 1000 / 60 / 60 / 24)} Days"`);
console.log(`"${Math.floor(différenceDate / 1000 / 60 / 60 / 24 / 365)} Years"`);
