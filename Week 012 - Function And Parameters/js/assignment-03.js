// Lessons from 56>>>63 Assignments
// Assignment 3

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let byMonths = theAge * 12;
    let byDays = theAge * 365;
    let byWeeks = parseInt(byDays / 7);
    let byHours = byDays * 24;
    let byMinutes = byHours * 60;
    let bySeconds = byMinutes * 60;
    
    console.log(`Your Age Is ${theAge} Years`);
    console.log(`Or ${byMonths} Months`);
    console.log(`Or ${byWeeks} Weeks, ${byDays % 7} Days`);
    console.log(`Or ${byDays} Days`);
    console.log(`Or ${byHours} Hours`);
    console.log(`Or ${byMinutes} Minutes`);
    console.log(`Or ${bySeconds} Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}
