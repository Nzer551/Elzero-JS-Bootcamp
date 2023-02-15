// Lessons from 102>>>110 Assignments
// Assignment 2

setTimeout(function () {
  let overlay = document.createElement("div");
  let parentDiv = document.createElement("div");
  let heading = document.createElement("h3");
  let paragraph = document.createElement("p");
  let closeBtn = document.createElement("button");

  overlay.className = "overlay";
  parentDiv.className = "popup";
  heading.textContent = "Welcome";
  paragraph.textContent = "Welcome To Elzero Web School";
  closeBtn.id = "close";
  closeBtn.innerHTML = `&times;`;

overlay.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, .1);
`;

parentDiv.style.cssText = `
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 10px;
background-color: #efefef;
width: 400px;
height: 200px;
border: 1px solid #ddd;
margin: auto;
`;

closeBtn.style.cssText = `
position: absolute;
top: -10px;
right: -5px;
border: 2px solid #fff;
outline: none;
background-color: #f84848;
color: #fff;
width: 30px;
height: 30px;
font-weight: bold;
border-radius: 50%;
cursor: pointer;
`;

parentDiv.appendChild(heading);
parentDiv.appendChild(paragraph);
parentDiv.appendChild(closeBtn);
overlay.appendChild(parentDiv);
document.body.prepend(overlay);

closeBtn.onclick = function () {
  overlay.style.display = "none"
};
}, 5000);
