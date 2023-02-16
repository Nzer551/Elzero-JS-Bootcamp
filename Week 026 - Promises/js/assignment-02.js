// Lessons from 179>>>188 Assignments
// Assignment 2
let scriptElement = document.querySelector("script");

fetch("../json/assignment-01.json").then((data) => {
    let result = data.json();
    return result;
}).then((theData) => {
    for(let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let headinglevel3 = document.createElement("h3");
        let paragraph = document.createElement("p");

        headinglevel3.appendChild(document.createTextNode(theData[i].title));
        paragraph.appendChild(document.createTextNode(theData[i].description));

        div.appendChild(headinglevel3);
        div.appendChild(paragraph);

        scriptElement.before(div);
    }
})