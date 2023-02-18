// Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Ali", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Safaa"];

let adminsCounter = 0;
let employeesCounter = 0;

while(myAdmins[adminsCounter] !== "Stop" && adminsCounter < myAdmins.length ) {
  adminsCounter++;
}

document.write(`<div>We Have ${adminsCounter} Admins</div><hr>`);

for(let i = 0; i < adminsCounter; i++) {
  document.write("<div>");
  document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`);
  document.write("<h3>Team Members: </h3>");
  for(let j=0; j < myEmployees.length; j++) {
    if(myAdmins[i].charAt(0) === myEmployees[j].charAt(0))
    document.write(`<p>- ${++employeesCounter} ${myEmployees[j]} </p>`);
  }
  employeesCounter = 0;
  document.write("</div><hr/>");
}
