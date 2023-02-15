// Lessons from 94>>>101 Assignments
// Assignment 3

let myDiv = document.getElementsByClassName("our-element")[0];
let paragraph = document.getElementsByTagName("p")[0];
let startElement = document.createElement("div");
let endElement = document.createElement("div");
let attribytesNames = ["class", "data-value"];

paragraph.remove();

startElement.textContent = "Start";
endElement.textContent = "End";

function setAttributes(element) {
  for(Atrname of attribytesNames) {
    if(Atrname === "class") {
      element.setAttribute(Atrname, element.textContent.toLowerCase());
    } else {
      element.setAttribute(Atrname, element.textContent);
    }
  }
  element.title = `${element.textContent} Element`;
}

setAttributes(startElement);
setAttributes(endElement);

myDiv.before(startElement);
myDiv.after(endElement);
