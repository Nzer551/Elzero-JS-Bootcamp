// Lessons from 54>>>55 Assignments
// Assignments 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if(typeof friends[index] !== typeof index && friends[index].startsWith("A") === false) {
        console.log(`"${++counter} => ${friends[index]}"`);
    }
    index++;
}