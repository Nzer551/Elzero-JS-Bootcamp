// Lessons from 94>>>101 Assignments
// Assignment 5
let elements = document.body.children;

for(let i = 0; i < 5; i++) {
  elements[i].onclick = function () {
    console.log(`"This Is ${elements[i].nodeName}"`)
  } 
}
