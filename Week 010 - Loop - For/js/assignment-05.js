// Lessons from 48>>>53 Assignments
// Assignment 5

// Required Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = +false;
  
for(let i = +false; i < friends.length; i++) {
  if(friends[i].startsWith(letter.toUpperCase())) {
    continue;
  } else {
    console.log(`"${++count} => ${friends[i]}"`);
  }
}
