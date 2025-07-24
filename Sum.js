function sumOfNumbers(userInput) {

    if (typeof userInput !== "number" || userInput === null || userInput === undefined || userInput.length === 0 || isNaN(userInput)) {
        return "Enter Valid Input";
    }

    let sumValue = 0 ;
    let numberToString = userInput.toString() ;
    
    for (let i = 0 ; i < numberToString.length ; i++) {
         sumValue += numberToString[i] - '0' ;
    }
    return sumValue ;
}


// console.log(sumOfNumbers(234))
// console.log(sumOfNumbers("hello"))
// console.log(sumOfNumbers([]))
// console.log(sumOfNumbers("  "))
// console.log(sumOfNumbers("12345"))
// console.log(sumOfNumbers(NaN))
