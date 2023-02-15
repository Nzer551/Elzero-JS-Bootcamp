// Lessons from 40>>>47 Assignments
// Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// check if needle value is in Haystack array with 3 method

haystack.includes(needle) === true ? console.log("Found") : console.log("Not Found");
haystack.indexOf(needle) !== -1 ? console.log("Found") : console.log("Not Found");
haystack.lastIndexOf(needle) !== -1 ? console.log("Found") : console.log("Not Found");
