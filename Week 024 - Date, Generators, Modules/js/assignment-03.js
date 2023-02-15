// Lessons from 147>>>156 Assignments
// Assignment 3

let dateNow = new Date();
let monthsName = ["January",	"February", "March", "April",	"Ma", "June", "July",	"August", "September", "October", "November", "December"];

dateNow.setDate(0);

console.log(dateNow);
console.log(`"Previous Month Is ${monthsName[dateNow.getMonth()]} And Last Day Is ${dateNow.getDate()}"`);

// Needed Output
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
