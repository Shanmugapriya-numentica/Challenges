
function addAfterOccurrence(userInputString, occurrenceLetter, charToAdd) {

    if (typeof userInputString !== 'string'
        || typeof occurrenceLetter !== 'string'
        || typeof charToAdd !== 'string') {

        return "Input Invalid";
    }

    let result = '';
    let isPresent = false;
    let matchingLetter = occurrenceLetter.toLowerCase();

    for (let i = 0; i < userInputString.length; i++) {

        result += userInputString[i];

        if (userInputString[i].toLowerCase() === matchingLetter) {
            result += charToAdd

            isPresent = true;
        }
    }
    if (!isPresent) {
        return "There is no letter " + occurrenceLetter + " in your input!";
    }
    else {
        return result;
    }
}

console.log(addAfterOccurrence("cat in the bag, clock", "c", "@"))
// console.log(addAfterOccurrence("hello", "b", '@'))
// console.log(addAfterOccurrence("cat in the bag, clock", "a", "#"))
// console.log(addAfterOccurrence(["cat"], "C", "@"))
// console.log(addAfterOccurrence("cat in the bag, clock", 56, "@"))
// console.log(addAfterOccurrence("cat in the bag, 4clock", "4", "@"))
// console.log(addAfterOccurrence("cat in the bag, c45lock", 4, "@"))





