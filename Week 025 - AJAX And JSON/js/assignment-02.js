const xhr = new XMLHttpRequest();

xhr.open("GET","../json/assignment-01-articles.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
    }
};

xhr.onloadend = () => {
    console.log("Data Loaded")
}