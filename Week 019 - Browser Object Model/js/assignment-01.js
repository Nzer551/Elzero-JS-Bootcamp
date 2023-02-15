// Lessons from 111>>>114 Assignments
// Assignment 1

let div = document.getElementById("style-option");
let selectBoxes = document.querySelectorAll("select");
let colorSelcetBox = document.getElementById("color");
let fontTypeSelectBox = document.getElementById("font-type");
let fontSizeSelectBox = document.getElementById("font-size");
let p = document.getElementsByTagName("p")[0];

div.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
column-gap: 5px;
`;

for(ele of selectBoxes) {
  ele.style.cssText = `
  width: 150px;
  height: 30px;
  background-color: #efefef;
  font-size: 17px;
  padding-left: 3px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  `;
}

for(let i = 16; i <= 30; i++) {
  let fontSizeOption = document.createElement("option");
  fontSizeOption.value = `${i}px`;
  fontSizeOption.textContent = `${i}px`;
  selectBoxes[1].appendChild(fontSizeOption);
}

document.body.style.backgroundColor = colorSelcetBox.value;
document.body.style.fontFamily = fontTypeSelectBox.value;
document.body.style.fontSize = fontSizeSelectBox.value;

function styleOptionChange () {

  colorSelcetBox.onchange = function (ele) {
    document.body.style.backgroundColor = ele.currentTarget.value;
    localStorage.setItem("color", ele.currentTarget.value);
  }
  
  fontTypeSelectBox.onchange = function (ele) {
    document.body.style.fontFamily = ele.currentTarget.value;
    localStorage.setItem("Font-Family", ele.currentTarget.value);
  }
  
  fontSizeSelectBox.onchange = function (ele) {
    document.body.style.fontSize = ele.currentTarget.value;
    localStorage.setItem("Font-Size", ele.currentTarget.value);
  }
}

if(localStorage.getItem("color")) {
  document.body.style.backgroundColor = localStorage.getItem("color");
  colorSelcetBox.value = localStorage.getItem("color");
} 
if(localStorage.getItem("Font-Family")) {
  document.body.style.fontFamily = localStorage.getItem("Font-Family");
  fontTypeSelectBox.value = localStorage.getItem("Font-Family");
}
if(localStorage.getItem("Font-Size")) {
  document.body.style.fontSize = localStorage.getItem("Font-Size");
  fontSizeSelectBox.value = localStorage.getItem("Font-Size");
}

p.style.cssText = `
width: 600px;
color: #fff;
text-align: left;
margin-top: 50px;
`;

styleOptionChange();