// Lessons from 134>>>146 Assignments
// Assignment 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Solution
let regEx = /Os\d*O/g;

console.log(specialNames.match(regEx));
// Output
// ['Os10O', 'OsO', 'Os100O']
