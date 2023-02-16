// Lessons from 71>>>78 Assignments
// Assignments 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix.map(function (element) {
  return isNaN(parseInt(element)) ? element : "";
}).reduce(function (accumulator, current) {
    return `${accumulator}${current}`
  });

console.log(letters); // Elzero
