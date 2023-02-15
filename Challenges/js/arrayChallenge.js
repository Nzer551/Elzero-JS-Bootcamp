// Array Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.length = counter + counter/counter; 
my.reverse();

console.log(my) // ["Osama", "Elham", "Mazero", "Ahmad"]

console.log(my.slice(counter/counter, counter)) // ["Elham", "Mazero"]

let arr = my.slice(counter/counter, counter);

arr = arr.join("").slice(zero, arr.length) + arr.join("").slice(counter + counter + +true);

console.log(arr); // "Elzero"

let str = arr.charAt(arr.indexOf("r")) + arr.slice(arr.indexOf("o")).toUpperCase();

console.log(str); // "rO"
