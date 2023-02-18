// Lessons from 64>>>70 Assignments
// Assignment 4
// Solution
function specialMix(...data) {
  let result = 0;
  let str = 0;

  for (let elements of data) {
    if (isNaN(parseInt(elements))) {
      str++;
    } else {
      result += parseInt(elements);
    }
  }
  return str === data.length ? "All Is String" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
