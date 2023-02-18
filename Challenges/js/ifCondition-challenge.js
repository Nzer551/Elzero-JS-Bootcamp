// If Condition Challenge
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40")
} else {
  console>log("Unknown");
}

// Write Ternary If Syntax

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console>log("Unknown");

// Make All The Conditions True To Get The Word “Good” In Output(5 Time)
//Use Only "st" Variable And Any Method You Learned From The Previous Lessons
let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if ((typeof st.length).toString() === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
