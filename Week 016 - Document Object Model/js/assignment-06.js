// Lessons from 86>>>93 Assignments
// Assignment 6

let theForm = document.forms[0];
let theInput = document.querySelectorAll(".input, input[type='submit']");
let numberInput = document.querySelector("input[type='number']");
let textNodeInput = document.querySelector("input[type='text']");
let elementType = document.querySelector("select[name='etype']");
let numbersOfElements = 0;
let elementTextNode = "";
let selectedElement = elementType.options[elementType.selectedIndex].text;
let theResult = document.querySelector(".results");
let btn = document.querySelector("input[type='submit']");

theForm.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
row-gap: 15px;
margin-top: 50px;
`;

theResult.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px 20px;
flex-wrap: wrap;
width: 1000px;
`;

for(ele of theInput) {
  ele.style.cssText = `
width: 300px;
height: 50px;
outline: none;
padding: 0 10px;
font-weight: bold;
border-radius: 4px;
border: 1px solid #efefef;
`
if(ele === btn) {
  ele.style.backgroundColor = "teal";
  ele.style.color = "#fff";
  ele.style.transition = ".3s";
  ele.style.cursor = "pointer";
  ele.style.border = "none";
}
}

numberInput.oninput = function () {
  numbersOfElements = numberInput.value;
}

textNodeInput.oninput = function () {
  elementTextNode = textNodeInput.value;
}

elementType.onchange = function () {
  selectedElement = elementType.options[elementType.selectedIndex].text;
}

theForm.onsubmit = function (event) {
  if(theResult.children.length === 0) {
    for(let i = 1; i <= numbersOfElements; i ++) {
    let createdElement = document.createElement(selectedElement);
    createdElement.textContent = elementTextNode;
    createdElement.className = "box";
    createdElement.title = "element";
    createdElement.id = `id-${i}`;
    createdElement.style.cssText = `
    width: calc((100% - 45px)/3);
    background-color: dodgerblue;
    color: white;
    text-transform: capitalize;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    `;
    theResult.appendChild(createdElement);
    }
  } else {
    theResult.innerHTML = "";
    for(let i = 1; i <= numbersOfElements; i ++) {
    let createdElement = document.createElement(selectedElement);
    createdElement.textContent = elementTextNode;
    createdElement.className = "box";
    createdElement.title = "element";
    createdElement.id = `id-${i}`;
    createdElement.style.cssText = `
    width: calc((100% - 45px)/3);
    background-color: dodgerblue;
    color: white;
    text-transform: capitalize;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    `;
    theResult.appendChild(createdElement);
    }
  }
  event.preventDefault();
}