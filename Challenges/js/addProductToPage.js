// Practice - Add Product To Page
let products = ["keyboard", "Mouse", "Pen", "Pad", "Screen", "Monitor"]
let colors = ["Red", "Green", "Black"];
let count = 3;

document.write(`<h1>Show ${count} Products</h1>`);

for( let i = 0; i < count; i++ ) {
  document.write("<div>");
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for( let j = 0; j < colors.length; j++ ) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write("</div>");
}
