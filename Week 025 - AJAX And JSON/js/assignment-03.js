// Lessons from 169>>>178 Assignments
// Assignment 3
const xhr = new XMLHttpRequest();

xhr.open("GET", "../json/assignment-01-articles.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        
        for(article of mainData) {
            article.category = "All";
        }
        
        let updatedData = JSON.stringify(mainData);
        
        console.log(mainData);
        console.log(updatedData);
    }
} 