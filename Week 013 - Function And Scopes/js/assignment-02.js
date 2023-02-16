// Lessons from 64>>>70 Assignments
// Assignment 2
// Convert the following functions to Arrow Function

// Normal Function
function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function

// Arrow Function
let itsMe = _ => `Iam an Arrow Function`;

console.log(itsMe()); // Iam an Arrow Function

// Normal Function
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Arrow Function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
