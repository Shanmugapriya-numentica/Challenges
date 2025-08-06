// Add "@" after each occurrence of character "c" in a string
// Input: "cat in the bag"
// Output: "c@at in the bag"

function addAfterOccurrence(userInputString, position, char) {

    if (typeof userInputString !== 'string' || typeof position !== 'string' || typeof char !== 'string') {
        return "Input Invalid"
    }

    let result = '';
    let isPresent = true;

    for (let i = 0; i < userInputString.length; i++) {

        result += userInputString[i];

        if (userInputString[i].toLowerCase() === position.toLowerCase()) {
            result += char;
            isPresent = false;
        }
    }
    if (isPresent) {
        return "Sorry!, There is no " + '"' + position + '"' + " in " + userInputString + '!';
    }
    return result;

}

// console.log(addAfterOccurrence("cat in the bag, clock", "C", "@"))
// console.log(addAfterOccurrence("hello", "b", '@'))
// console.log(addAfterOccurrence("cat in the bag, clock", "a", "#"))
// console.log(addAfterOccurrence(["cat"], "C", "@"))
// console.log(addAfterOccurrence("cat in the bag, clock", 56, "@"))
// console.log(addAfterOccurrence("cat in the bag, 4clock", "4", "@"))
// console.log(addAfterOccurrence("cat in the bag, c45lock", 4, "@"))





