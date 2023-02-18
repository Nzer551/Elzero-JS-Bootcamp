// Lessons from 159>>>168 Assignments
// Assignment 4
// Solution
let birthDate1 = new Date();
let birthDate2 = new Date("1994-11-02T00:00:00");
let birthDate3 = new Date();

birthDate3.setMilliseconds(birthDate2 - birthDate1 + 1000);
birthDate1.setTime(Date.parse("Nov 2 1994"));

console.log(birthDate1);
console.log(birthDate2);
console.log(birthDate3);
