// Lessons from 169>>>178 Assignments
// Assignment 4
const xhr = new XMLHttpRequest();
let containerDiv = document.createElement("div");

containerDiv.id = "data";

xhr.open("GET", "../json/assignment-01-articles.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);

        for(article of mainData) {
            let div = document.createElement("div");
            let firstParagraph = document.createElement("p");
            let secondParagraph = document.createElement("p");
            let thirdParagraph = document.createElement("p");
            let headingL2 = document.createElement("h2");
            
            headingL2.appendChild(document.createTextNode(article["title"]));
            firstParagraph.appendChild(document.createTextNode(article["content"]));
            secondParagraph.appendChild(document.createTextNode(article["author"]));
            thirdParagraph.appendChild(document.createTextNode(article["category"]));

            div.appendChild(headingL2);
            div.appendChild(firstParagraph);
            div.appendChild(secondParagraph);
            div.appendChild(thirdParagraph);

            containerDiv.append(div);
        }
    }
}

document.body.prepend(containerDiv);