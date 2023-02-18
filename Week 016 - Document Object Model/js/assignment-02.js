// Lessons from 86>>>93 Assignments
// Assignment 2
// Solution
let images = document.querySelectorAll("img");
let source = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
let altText = "Elzero Logo";

images.forEach(function (imageElement) {
  imageElement.setAttribute("src", source);
  imageElement.setAttribute("alt", altText);
});

document.body.style.cssText = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #0A2647;
min-height: 100vh;
`;