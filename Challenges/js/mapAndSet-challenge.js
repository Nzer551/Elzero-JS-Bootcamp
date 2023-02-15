// Map And Set Challenge
/*
Map And Set + What You Learn => Challenge
Requirements
-- You Can't Use Numbers Or True Or False
-- Don't Use Array Indexes
-- You Can't Use Loop
-- You Can't Use Any Higher Order Function
-- Only One Line Solution Inside Console
-- If You Use Length => Use Only One Time
--
Hints
-- You Can Use * Operator Only In Calculation
-- Set
-- Spread Operator
-- Math Object Methods
*/

let n1 = [10, 30, 10, 20]; // Length = 4
let n2 = [30, 20, 10]; // Length = 3
// Solution 1
console.log([...n1, ...n2].length * Math.max(...n1)); // 210

// Solution 2
console.log(+`${new Map([n2, [...new Set(n1)]]).size}${Math.min(...n2)}`); // 210
