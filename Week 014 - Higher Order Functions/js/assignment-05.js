// Lessons from 71>>>78 Assignments
// Assignments 5

let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce(function (accumulator, current) {
  return current % 2 == 0 ? `${+accumulator * current}` : `${+accumulator + current}`;
}, 1);

console.log(result); // 500
