
function findEvenNumbersSum(userInputArray) {
    if (!Array.isArray(userInputArray)) {
        console.error("Input Invalid");
        return NaN;
    }

    let result = 0;

    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] % 2 == 0) {
            result += userInputArray[i];
        }
        else {
            console.error("There is no Even Numbers in Array!");
        }
    }
    return result;
}

console.log(findEvenNumbersSum([38, 3, 2, 8, 31]))
// console.log(findEvenNumbersSum("Have a nice day!"))
// console.log(findEvenNumbersSum([1,2,3,4,5,6], "hello"))
// console.log(findEvenNumbersSum(1,3))
// console.log(findEvenNumbersSum([1,3,2]))