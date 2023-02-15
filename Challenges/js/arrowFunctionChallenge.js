// Arrow Function Challenge

// Normal Function
let names = function (...members) {
  return `String [${members.join("], [")}] => Done !`;
}

// Arrow Function
let names1 = (...members) => `String [${members.join("], [")}] => Done !`;

console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


let myNumbers = [20, 50, 10, 60];

// Arrow Function
let calc = (one, two, ...nums) => one + two + nums.pop();

// Reguler Function
let calc1 = function (one, two, ...nums) {
  return one + two + nums.pop();
}

console.log(calc1(10, myNumbers[+false], myNumbers[+true])); // 80
