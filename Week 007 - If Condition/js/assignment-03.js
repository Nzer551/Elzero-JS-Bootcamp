// Lessons from 33>>>37 Assignments
// Assignments 3

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Solution 1
if (typeof num3 != typeof num2) {
  num3 > num1 && console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
  num3 == num2 && console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
  num3 !== num1 && console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// Solution 2
if (typeof num3 !== typeof num2) {
  if (num3 > num1) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"); 
  }
  if (num3 == num2) { 
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
  }
  if (num3 !== num1)
  console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
