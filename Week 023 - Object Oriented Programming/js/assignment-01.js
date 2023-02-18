// Lessons from 147>>>158 Assignments
// Assignment 1
/*
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}
*/

// Solution
// Convert Function Car() Constructor To Class Declaration

class Car {
  constructor(name, model, price) {
    this.carName = name;
    this.carModel = model;
    this.carPrice = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("GXR V8", 2023, 500000);
let car3 = new Car("Hilux", 2023, 450000);

console.log(
  `Car One Name Is '${car1.carName}' And Model Is '${car1.carModel}' And Price Is '${car1.carPrice}'`
);
console.log(car1.run());

// Needed Output
/*
("Car One Name Is MG And Model Is 2022 And Price Is 420000")
("Car Is Running Now")
*/
