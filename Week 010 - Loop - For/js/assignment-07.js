// Lessons from 48>>>53 Assignments
// Assignment 7
// Required Output
2
3
4

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = start; i < mix.length; i++) {
  if(mix[i] === +true || typeof mix[i] !== typeof start) {
    continue;
  } else {
    console.log(mix[i])
  }
}
