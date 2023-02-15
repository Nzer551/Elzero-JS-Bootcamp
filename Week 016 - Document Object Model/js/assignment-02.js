// Lessons from 86>>>93 Assignments
// Assignment 2

let images = document.querySelectorAll("img");
let source = "../image/favicon/favicon.ico";
let altText = "Elzero Logo";

images.forEach(function (imageElement) {
  imageElement.setAttribute("src", source);
  imageElement.setAttribute("alt", altText);
});

console.log(images);
