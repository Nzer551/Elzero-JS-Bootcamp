// Lessons from 56>>>63 Assignments
// Assignment 1

function sayHello(theName, theGender) {
  theGender === "Male" ? console.log(`Hello Mr ${theName}`) :
  theGender === "Female" ? console.log(`Hello Miss ${theName}`) : 
  console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
