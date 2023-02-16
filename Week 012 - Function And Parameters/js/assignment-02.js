// Lessons from 56>>>63 Assignments
// Assignment 2
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function calculate(firstNum, secondNum, operation) {
  let result;
  if (secondNum !== undefined) {
    if (operation === "add" || operation === undefined) {
      result = firstNum + secondNum;
    } else if (operation === "subtract") {
      result = firstNum - secondNum;
    } else {
      result = firstNum * secondNum; 
    }
    return console.log(result); 
  } else {
    console.log("Second Number Not Found");
  }
}
