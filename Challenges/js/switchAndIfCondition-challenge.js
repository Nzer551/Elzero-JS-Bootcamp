// Switch And If Condition Challenge
// Switch Challenge
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// Rewrite The Previous Code Using Switch Statement

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}

// If Challenge
let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money Is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money Is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money Is ${money}`);
  case 4:
    money = 1000;
    console.log(`My Money Is ${money}`);
  case 5:
    money = 0;
    console.log(`My Money Is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money Is ${money}`);
}

// Rewrite The Previous Code Using If Statement

if (holidays === 0) {
  money = 5000;
  console.log(`My Money Is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money Is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money Is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money Is ${money}`);
} else {
  money = 0;
  console.log(`My Money Is ${money}`);
}
