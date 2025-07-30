// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

function stringSplit(userInputArray, indexCounts) {
    if (typeof userInputArray !== 'string' || typeof indexCounts !== 'number'
        || arguments.length !== 2 || userInputArray.length < indexCounts) {
        return "Input Invalid!!";
    }

    let newUserInputArray = '';
    let newArray = [];

    for (let i = 0; i < userInputArray.length; i++) {

        if (userInputArray[i] !== " ") {
            newUserInputArray = newUserInputArray + userInputArray[i];
        }
    }

    for (let i = 0; i < newUserInputArray.length; i++) {
        newArray.push(newUserInputArray.slice(i, i + indexCounts));
        i = i + indexCounts;

    }

    return newArray;

}

// console.log(stringSplit('numenticaui', 2)) ;
// console.log(stringSplit("All is well, Be Positive", 5))
// console.log(stringSplit("All is well, Be Positive", "p"))
// console.log(stringSplit([23,34,45], 3))
// console.log(stringSplit("All is well, Be Positive", 3, 90))
// console.log(stringSplit(null, 9))
// console.log(stringSplit("hi", 12))
// console.log(stringSplit(["helo"], "89"))
