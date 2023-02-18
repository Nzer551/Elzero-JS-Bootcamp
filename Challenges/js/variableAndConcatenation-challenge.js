// Variables and Cocatenation Challenge 
let theTitle = 'Elzero', 
    theDescription = 'Elzero Web School', 
    theDate = '25/10', 
    myCard = `
<div class="card">
  <h3> Hello ${theTitle}</h3>
  <p>${theDescription}</p>
  <span>${theDate}</span>
</div>
`;

document.write(myCard.repeat(4));
