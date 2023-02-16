// Lessons from 102>>>110 Assignments
// Assignment 1
let numbers = prompt("Print Number From - To", "Example: 5-20").split("-");
let div = document.createElement("div");

div.style.cssText = `
display: flex;
flex-direction: column;
`;

numbers.reduce(function (acc, curr) {
  if(+acc <= +curr) {
    for(let i = +acc; i <= +curr; i++) {
      let span = document.createElement("span");

      span.textContent = i;
      div.appendChild(span);
    }
  } else {
    for(let i = +curr; i <= +acc; i++) {
      let span = document.createElement("span");

      span.textContent = i;
      div.appendChild(span);
    }
  }
  document.body.prepend(div);
});
