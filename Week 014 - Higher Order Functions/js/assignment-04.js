// Lessons from 71>>>78 Assignments
// Assignments 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums = numsAndStrings.filter(function (element) {
  return !isNaN(parseInt(element));
}).map(function (element) {
  return -element;
})

console.log(nums); // [-1, -10, 10, 20, -5, -3]
