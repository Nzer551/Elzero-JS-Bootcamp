// Lessons from 79>>>85 Assignments
// Assignment 2
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property: "Method Two"
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
  property: "Method Three"
})

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({},{
  property: "Method Four"
});

console.log(objMethodFour.property); // "Method Four"
