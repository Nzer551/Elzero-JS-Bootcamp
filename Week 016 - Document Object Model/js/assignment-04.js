// Lessons from 86>>>93 Assignments
// Assignment 4
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let divOneContent = divOne.textContent;
let divTwoContent = divTwo.textContent;

if (divOne.title !== divOne.className) {
  divOne.title = divOne.className;
}

if(divOne.textContent !== divOne.className) {
  divOne.textContent = divTwoContent;
}

if (divTwo.title !== divTwo.className) {
  divTwo.title = divTwo.className;
}

if(divTwo.textContent !== divTwo.className) {
  divTwo.textContent = divOneContent + ` ${2}`;
}
