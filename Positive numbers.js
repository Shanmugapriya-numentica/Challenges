
function PositiveNumbers(userInputArray) {

    if ( !Array.isArray(userInputArray) || userInputArray === null 
        || userInputArray === undefined || userInputArray.length === 0 || userInputArray === 'string' ) {
        return "Not a valid array Input";
    }

    let newPositiveNumbers = [] ;
    for (let i = 0; i < userInputArray.length; i++) {
        if ( userInputArray[i] > 0 && typeof userInputArray[i] === 'number' ) {
            newPositiveNumbers.push(userInputArray[i]);
        }
    }
    
    return newPositiveNumbers ;
}

// console.log(PositiveNumbers([1, -2, 3, 4, -5, 6])); 
// console.log(PositiveNumbers("123")); 
// console.log(PositiveNumbers([89,-8,0,67]));  