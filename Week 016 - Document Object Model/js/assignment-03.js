// Lessons from 86>>>93 Assignments
// Assignment 3
// Solution
let myForm = document.forms[0];
let myInput = document.querySelector("input[name='dollar']");
let firstSpan = document.getElementsByTagName("span")[0];
let secondSpan = document.getElementsByTagName("span")[1];

document.body.style.cssText = `
display: grid;
place-content: center;
min-height: 100vh;
`;

myForm.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
column-gap: 10px;
background-color: dodgerblue;
color: #fff;
max-width: 800px;
padding: 10px;
border-radius: 5px;
`;

myInput.style.cssText = `
outline: none;
border: none;
width: 120px;
height: 30px;
padding: 5px 10px;
border-radius: 5px;
`;

firstSpan.style.cssText = `
display: inline-block;
background-color: #fff;
color: #000;
padding: 2px 5px;
border-radius: 3px;
`;

secondSpan.style.cssText = `
display: inline-block;
background-color: #fff;
color: #000;
padding: 2px 5px;
border-radius: 3px;
`;

myInput.oninput = function () {
  let finalresult = myInput.value * 15.6;

  if (myInput.value !== "") {
    firstSpan.textContent = myInput.value;
    secondSpan.textContent = finalresult.toFixed(2);
  } else {
    firstSpan.textContent = 0;
    secondSpan.textContent = 0;
  }
};
