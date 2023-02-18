// Lessons from 115>>>122 Assignments
// Assignment 2
let mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    ["PHP", "Python", ["Django", "Laravel"]]
  ];

// Solution
  let [a, b, c, [d, e, [f, g]]] = mySkills;

  console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
