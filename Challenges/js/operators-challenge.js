// Operators Challenge 1
let a = 10, b = "20", c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
[++a]
Value: 11;
   Explain: Pre Increment
   [+]
   Explain: Addition
   [+b++]
   Value: 20
   Explain: Unary Plus and Post Increment
   [+]
   Explain: Addition
   [+c++]
   Value: 80
   Explain: Unary Plus and Post Increment
   [-]
   Explain: Subtraction
   [+a++]
   Value: 11
   Explain: Unary Plus and Post Increment
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
   [++a]
   Value: 13;
   Explain: Pre Increment
   [+]
   Explain: Addition
   [-b]
   Value: -21
   Explain: Unary Negation
   [+]
   Explain: Addition
   [+c++]
   Value: 81
   Explain: Unary Plus and Post Increment
   [-]
   Explain: Subtraction
   [-a++]
   Value: -13
   Explain: Unary Negation and Post Increment
   [+]
   Explain: Addition
   [+a]
   Value: 14
   Explain: Unary Plus
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
   [--c]
   Value: 81;
   Explain: Pre Decrement
   [+]
   Explain: Addition
   [+b]
   Value: 21
   Explain: Unary Plus
   [+]
   Explain: Addition
   [--a]
   Value: 13
   Explain: Pre Decrement
   [*]
   Explain: Multiplication
   [+b++]
   Value: 21
   Explain: Unary plus and post increment
   [-]
   Explain: Subtraction
   [+b]
   Value: 22
   Explain: Unary plus
   [*]
   Explain: Multiplication
   [a]
   Value: 13
   [+]
   Explain: Addition
   [--a]
   Value: 12
   Explain: Pre Decrement
   [-]
   Subtraction
   [+true]
   Value: 1
   Explain: Unary plus
*/


// Operators Challenge 2
let d = "-100", 
    e = "20", 
    f = 30, 
    g = true;

// Only Use Variable Value
// Do Not Use Variable Twice

console.log(-d * +e); //2000
console.log(++g * ++e + -d + ++f); //173
