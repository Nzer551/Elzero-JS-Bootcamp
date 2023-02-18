// DOM Challenge
let header = document.createElement("header");
let logoDiv = document.createElement("div");
let logoLink = document.createElement("a");
let scriptElement = document.getElementById("dom-challenge");
let theUl = document.createElement("ul");
let theContent = document.createElement("div");
let theFooter = document.createElement("footer");

// Body Style
document.body.style.cssText = `
background-color: rgba(236, 236, 236);
padding: 0;
margin: 0;
`;

// header Style
header.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
box-sizing: border-box;
height: 50px;
padding: 0 10px 0 15px;
`;
header.className = "website-head";

// Logo Style
logoLink.style.cssText = `
font-size: 25px;
font-weight: bold;
text-transform: capitalize;
text-decoration: none;
color: teal;
box-sizing: border-box;
`;
logoLink.textContent = "elzero";
logoDiv.className = "logo";
logoLink.href = "#";
logoDiv.appendChild(logoLink);
// Append logo To Header
header.appendChild(logoDiv);

// Ul Menu Style
theUl.style.cssText = `
padding: 0;
margin: 0;
box-sizing: border-box;
`;
theUl.className = "menu";
// Append Ul Menu To Header
header.appendChild(theUl);

// Navbar Link
for(let i = 0; i < 4; i++) {
  let theLi = document.createElement("li");
  let theNavLink = document.createElement("a");

  if(i === 0) {
    theNavLink.textContent = "home";
  } else if(i === 1) {
    theNavLink.textContent = "about";
  } else if(i === 2) {
    theNavLink.textContent = "service";
  } else {
    theNavLink.textContent = "contact";
  }

  // Navbar Li Style
  theLi.style.cssText = `
  list-style-type: none;
  display: inline-flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  `;

  // Navbar Link Style
  theNavLink.style.cssText = `
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  color: #333;
  padding: 5px;
  box-sizing: border-box;
  `;
  theNavLink.href = "#";

  theNavLink.onmouseover = function () {
    theNavLink.style.backgroundColor = "teal";
    theNavLink.style.color = "white";
  }

  theNavLink.onmouseout = function () {
    theNavLink.style.backgroundColor = "transparent";
    theNavLink.style.color = "#333";
  }

  theLi.appendChild(theNavLink);
  theUl.appendChild(theLi);
}

// Content Style
theContent.style.cssText = `
display: flex;
flex-wrap: wrap;
gap: 20px;
min-height: calc(100vh - 100px);
padding: 20px;
box-sizing: border-box;
`;
theContent.className = "content";

// The Products
for(let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  let theSpan = document.createElement("span");
  let nodeTxt =document.createTextNode("Product");
  
  // Product Box Style
  product.style.cssText = `
  background-color: #fff;
  color: rgb(136, 136, 136);
  width: calc((100% - 40px)/3);
  text-align: center;
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 5px;
  box-sizing: border-box;
  `;

  theSpan.textContent = `${i}`;
  theSpan.style.cssText = `
  display: block;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  `;

  product.appendChild(theSpan);
  product.appendChild(nodeTxt);
  theContent.appendChild(product);
}

// Footer style
theFooter.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
background-color: teal;
color: #fff;
height: 40px;
font-size: 22px;
padding: 10px;
margin-bottom: 15px;
box-sizing: border-box;
`;
theFooter.className = "footer";
theFooter.textContent = "Copyright 2022";

// Append Header & Content & Footer To Body
scriptElement.before(header);
scriptElement.before(theContent);
scriptElement.before(theFooter);
