// Lessons from 147>>>156 Assignments
// Assignment 5

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  id: {
    writable: true,
    enumerable: false,
    configurable: true,
  },
  score: {
    writable: false,
    enumerable: true,
    configurable: true
  }
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
"username => Elzero"
"score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
