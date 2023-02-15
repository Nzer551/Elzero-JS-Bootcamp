// Lessons from 111>>>114 Assignments
// Assignment 2

let form = document.forms[0];
let countrySelect = document.getElementById("user-country");
let countryOptions = document.getElementById("user-country").options;
let inputs = document.getElementsByTagName("input");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPhoneNumber = document.getElementById("user-phone-number");

form.style.cssText = `
display: flex;
flex-direction: column;
row-gap: 10px;
background-color: #ddd;
width: 400px;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
margin: auto;
`;


for(inpt of inputs) {
  inpt.style.cssText = `
  height: 40px;
  border: 1px solid #bbb;
  outline: none;
  padding: 5px;
  color: #333;
  `;
  if(sessionStorage.getItem(inpt.id)) {
    inpt.value = sessionStorage.getItem(inpt.id);
  }
}

countrySelect.style.cssText = `
height: 40px;
border: 1px solid #bbb;
outline: none;
padding: 5px;
color: #333;
`;

for(option of countryOptions) {
  option.textContent = option.value;
}

userName.onblur = function () {
  sessionStorage.setItem(userName.id, userName.value);
}

userEmail.onblur = function () {
  sessionStorage.setItem(userEmail.id, userEmail.value);
}

userPhoneNumber.onblur = function () {
  sessionStorage.setItem(userPhoneNumber.id, userPhoneNumber.value);
}

countrySelect.onchange = function () {
  sessionStorage.setItem(countrySelect.id, countrySelect.value);
}

if(sessionStorage.getItem(countrySelect.id)) {
  countrySelect.value = sessionStorage.getItem(countrySelect.id);
}
