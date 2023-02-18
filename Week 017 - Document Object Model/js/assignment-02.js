// Lessons from 94>>>101 Assignments
// Assignment 2
// Solution
let addClassInput = document.getElementsByClassName("classes-to-add")[0];
let removeClassInput = document.getElementsByClassName("classes-to-remove")[0];
let currentElement = document.querySelector(".current");
let myDiv = document.querySelector("div.classes-list div");
let listOfAddedClasses = "";
let listOfremovedClasses = "";

for (ele of currentElement.classList) {
  let addedClassElement = document.createElement("span");

  addedClassElement.classList.add(`${ele}`);
  addedClassElement.textContent = ele;
  myDiv.appendChild(addedClassElement);
}

addClassInput.onblur = function () {
  listOfAddedClasses = addClassInput.value.toLowerCase().split(" ");
  for (cName of listOfAddedClasses) {
    if (cName !== "" && isNaN(parseInt(cName[0]))) {
      //add class to element.current class list
      currentElement.classList.add(`${cName}`);
      //create element and show classes that was added
    }
  }
  showClasses();
  addClassInput.value = "";
};

removeClassInput.onblur = function () {
  let sortedClassList = Array.from(currentElement.classList).sort();

  listOfremovedClasses = removeClassInput.value.toLowerCase().split(" ");
  for (cName of listOfremovedClasses) {
    if (cName !== "" && currentElement.classList.contains(`${cName}`)) {
      //remove class from element.current class list
      currentElement.classList.remove(`${cName}`);
      //remove element with the same removed class
      for (ele of myDiv.children) {
        if (ele.classList.contains(`${cName}`)) {
          ele.remove();
        }
      }
    }
  }
  if (currentElement.classList.length === 0) {
    myDiv.textContent = "Now Classes To Show";
  }
  removeClassInput.value = "";
};

function showClasses() {
  let sortedClassList = Array.from(currentElement.classList).sort();

  if (currentElement.classList.length === 0) {
    myDiv.textContent = "Now Classes To Show";
  } else {
    myDiv.textContent = "";
    for (ele of sortedClassList) {
      let addedClassElement = document.createElement("span");

      addedClassElement.classList.add(`${ele}`);
      addedClassElement.textContent = ele;
      myDiv.appendChild(addedClassElement);
    }
  }
}
