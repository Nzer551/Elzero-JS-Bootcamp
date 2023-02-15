// Lessons from 115>>>122 Assignments
// Assignment 3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let bestFriends = arr3.concat(arr2, arr1);;

let [, a, b, , , , c] = bestFriends;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
