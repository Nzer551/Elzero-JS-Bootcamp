// Lessons from 64>>>70 Assignments
// Assignment 3
// Convert Normal Function To Arrow Function
// Normal Function
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Solution >> Arrow Function
let checkerArrow = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checkerArrow("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerArrow("Ahmed")("Not Available")()); // Iam Not Avaialble
