// Destructuring Challenge

let chosen = 1;

let myFriends = [{
  title: "Osama",
  age: 39,
  available: true,
  skills: ["HTML", "CSS"],
}, {
  title: "Ahmed",
  age: 25,
  available: false,
  skills: ["Python", "Django"],
}, {
  title: "Sayed",
  age: 33,
  available: true,
  skills: ["PHP", "Laravel"],
}];

if(chosen === 1) {
  let [{title: titleOne, age: ageOne, available: statusOne, skills: [, a]}] = myFriends;

  console.log(titleOne);
  console.log(ageOne);
  console.log(`${statusOne ? "available" : "Not Available"}`);
  console.log(a);
} else if(chosen === 2) {
  let [, {title: titleTwo, age: ageTwo, available: statusTwo, skills: [, b]}, ] = myFriends;

  console.log(titleTwo);
  console.log(ageTwo);
  console.log(`${statusTwo ? "available" : "Not Available"}`);
  console.log(b);
} else {
  let [, , {title: titleThree, age: ageThree, available: statusThree, skills: [, c]}] = myFriends;

  console.log(titleThree);
  console.log(ageThree);
  console.log(`${statusThree ? "available" : "Not Available"}`);
  console.log(c);
}
