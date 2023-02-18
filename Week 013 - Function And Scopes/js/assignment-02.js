// Lessons from 64>>>70 Assignments
// Assignment 2
// Convert the following functions to Arrow Function

// Normal Function
function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function

// Solution >> Arrow Function
let itsAlsoMe = (_) => `Iam an Arrow Function`;

console.log(itsAlsoMe()); // Iam an Arrow Function

// Normal Function
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Solution >> Arrow Function
let urlCreateArrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreateArrow("https", "elzero", "org")); // https://www.elzero.org
