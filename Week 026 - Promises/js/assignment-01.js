// Lessons from 179>>>188 Assignments
// Assignment 1
let scriptElement = document.querySelector("script");

const myPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if(this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText));
        } else {
            reject(Error("Json File Fetch failed"));
        }
    }
    xhr.open("GET", "../json/assignment-01.json");
    xhr.send();
});

myPromise.then((result) => {
    for(let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let headingLevel3 = document.createElement("h3");
        let paragraph = document.createElement("p");

        headingLevel3.appendChild(document.createTextNode(result[i].title));
        paragraph.appendChild(document.createTextNode(result[i].description));

        div.appendChild(headingLevel3);
        div.appendChild(paragraph);

        scriptElement.before(div);
    }
    
}).catch((result)=> {
    console.error(result);
})