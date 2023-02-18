// Lessons from 40>>>47 Assignments
// Assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// check if (needle) value is in Haystack array with 3 method
// Solution 1
haystack.includes(needle) === true
  ? console.log("Found")
  : console.log("Not Found");
// Solution 2
haystack.indexOf(needle) !== -1
  ? console.log("Found")
  : console.log("Not Found");
// Solution 3
haystack.lastIndexOf(needle) !== -1
  ? console.log("Found")
  : console.log("Not Found");
