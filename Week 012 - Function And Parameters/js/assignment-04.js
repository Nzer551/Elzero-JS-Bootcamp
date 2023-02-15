// Lessons from 56>>>63 Assignments
// Assignment 1

function checkStatus(a, b, c) {
    let age, name, status;

    typeof a === "number" ? age = a :
    typeof a === "string" ? name = a : status = a;

    typeof b === "number" ? age = b :
    typeof b === "string" ? name = b : status = b;

    typeof c === "number" ? age = c :
    typeof c === "string" ? name = c : status = c;

    return `Hello ${name}, Your Age Is ${age}, You Are ${status === false ? "Not " : ""}Available For Hire`;
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"