// Lessons from 134>>>146 Assignments
// Assignment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// Solution
let regEx = /\d+(?::\w+){1,}/;

console.log(ip.match(regEx));
