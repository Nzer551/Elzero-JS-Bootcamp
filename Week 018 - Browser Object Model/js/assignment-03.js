// Lessons from 102>>>110 Assignments
// Assignment 3

let couterDiv = document.querySelector(".counter");
let handeler = setInterval(countDown, 1000);

function countDown() {
  couterDiv.innerHTML -= 1;
  if(couterDiv.innerHTML === "0") {
    clearInterval(handeler);
  }
}
