
function sumOfNumber(userInput) {

    if (typeof userInput !== "string" || arguments.length !== 1) {
        return "Input Invalid!";
    }
    let sum = 0;
    let separatedArray = userInput.split(',');

    for (let i = 0; i < separatedArray.length; i++) {
        let number = separatedArray[i] - '0';
        if (typeof number !== 'number') {
            return "input invalid"
        }
        else {
            sum += number;
        }
    }

    return sum;

}



console.log(sumOfNumber("1.5, 2, 44, 66, 12, 90"))
// console.log(sumOfNumber("12,34,45,67,90"))
// console.log(sumOfNumber("1,2,3, ,4"))
// console.log(sumOfNumber(1,2,3,9))
// console.log(sumOfNumber(98789834))
// console.log(sumOfNumber(null))
// console.log(sumOfNumber(undefined))
// console.log(sumOfNumber("1,2,3,4", 34))

