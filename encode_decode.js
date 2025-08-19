// encode(“arun”, 2)  -> ctwp
// encode(“arun”, 4) -> evyr
// And similarly decode will return the opposite
// decode(“ctwp”, 2) -> arun
// decode(“evyr”, 4) -> arun

function encode(userInput, userInputValue) {
    if (typeof userInput !== 'string' ||
        typeof userInputValue !== 'number') {
        console.error("Input Invalid");
    }

    let result = '';

    for (let i = 0; i < userInput.length; i++) {

        let numValue = userInput.charCodeAt(i);
        let valtoGo = numValue + userInputValue;

        if (valtoGo > 122) {
            let uptoZ = 122 - numValue;
            let remaining = userInputValue - uptoZ;

            result += String.fromCharCode(96 + remaining);

        }
        else {
            result += String.fromCharCode(numValue + userInputValue);
        }
    }
    return result;
}



function decode(userInput, userInputValue) {
    if (typeof userInput !== 'string' ||
        typeof userInputValue !== 'number') {
        console.error("Input Invalid");
    }

    let result = '';

    for (let i = 0; i < userInput.length; i++) {

        let numValue = userInput.charCodeAt(i);
        let valtoGo = numValue - userInputValue;

        if (valtoGo < 97) {
            let uptoA = numValue - 97;
            let remaining = userInputValue - uptoA;

            result += String.fromCharCode(123 - remaining);

        }
        else {
            result += String.fromCharCode(numValue - userInputValue);
        }
    }
    return result;
}


// console.log(encode("zy", 2))
console.log(encode("arun", 4))
// console.log(encode("arun", 2))
// console.log(encode("hi","hello"))

// console.log(decode("ctwp", 2)) 
console.log(decode("evyr",4))
// console.log(decode("abc",2))
// console.log(decode("Good", "Morning"))