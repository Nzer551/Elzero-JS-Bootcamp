// Lessons from 56>>>63 Assignments
// Assignment 6

function multiply(...numbers) {
    let result = 1;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "string") {
            continue;
        } else {
            result *= parseInt(numbers[i]);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000