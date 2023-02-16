// Lessons from 48>>>53 Assignments
// Assignment 3
// Required Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4

let end = 6;
let start = 1;
let breaker = 2;

for(let i = start; i <= end; i++) {
  console.log(i);
  for(let j = breaker; j < end; j += breaker) {
    console.log("--", j);
  }
}
