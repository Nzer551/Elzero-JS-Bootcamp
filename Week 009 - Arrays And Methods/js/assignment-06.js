// Lessons from 40>>>47 Assignments
// Assignment 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Method 1
allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

// Method 2
allArrs = arr1.concat(arr2).sort().slice(indexOf("F")).join("").toLowerCase();

console.log(allArrs); // fxy