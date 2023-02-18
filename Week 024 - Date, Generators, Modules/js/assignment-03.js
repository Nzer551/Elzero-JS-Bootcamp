// Lessons from 159>>>168 Assignments
// Assignment 3
// Solution
let dateNow = new Date();
let monthsName = [
  "January",
  "February",
  "March",
  "April",
  "Ma",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

dateNow.setDate(0);

console.log(dateNow);
console.log(
  `"Previous Month Is ${
    monthsName[dateNow.getMonth()]
  } And Last Day Is ${dateNow.getDate()}"`
);
