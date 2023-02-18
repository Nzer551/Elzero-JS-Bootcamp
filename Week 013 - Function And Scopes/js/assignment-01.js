// Lessons from 64>>>70 Assignments
// Assignment 1
// Solution
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let theNameArr = zName.split(" ");
    let theNameStr = `${theNameArr[0]} ${theNameArr[1]
      .toUpperCase()
      .slice(0, 1)}`;

    return `Hello ${theNameStr}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
