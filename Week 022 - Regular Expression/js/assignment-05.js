// Lessons from 134>>>146 Assignments
// Assignment 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

// Solution 1
let re = /\d+\D+\d+\D+\d+/; // Write Pattern Here
// Solution 2
let regEx = /\d+(?:\D+\d+)+/; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
