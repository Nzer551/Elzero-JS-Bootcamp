// Random Argument Function Challenge

function showDetails(a, b, c) {
  let userName, age, permission;
  typeof a === "number" ? age = a : typeof a === "string" ? userName = a : permission = a;
  typeof b === "number" ? age = b : typeof b === "string" ? userName = b : permission = b;
  typeof c === "number" ? age = c : typeof c === "string" ? userName = c : permission = c;
  
  console.log(`Hello ${userName}, Your Age Is ${age}, You ${permission ? "Are": "Are Not"} Available For Hire`);
}

showDetails("Osama", 38, true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails("Osama", true, 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
