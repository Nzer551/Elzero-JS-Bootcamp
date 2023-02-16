// Lessons from 86>>>93 Assignments
// Assignment 5
let images = document.images;

for(ele of images) {
  if(ele.hasAttribute("alt")) {
    ele.setAttribute("alt", "Old")
  } else {
    ele.setAttribute("alt", "Elzero New")
  }
  console.log(ele);
}
