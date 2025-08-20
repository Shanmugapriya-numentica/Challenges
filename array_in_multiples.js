// 3. Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]


function Multiples(userInput, times) {

    if (typeof userInput !== 'number' || typeof times !== 'number') {
        console.error("Invalid Input!");
        return 0;
    }
    let result = [];

    for (let i = 0; i < times; i++) {
        result[i] = userInput * (i + 1);
    }

    return result;
}

// console.log(Multiples(2, 5))
// console.log(Multiples("hi",12))
// console.log(Multiples(13,"hello"))
// console.log(Multiples(0,0))
// console.log(Multiples(null,89))