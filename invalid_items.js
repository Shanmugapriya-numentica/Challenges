// 4. Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];

function filterOut(userInputArray, userDataType) {
    if (!Array.isArray(userInputArray) || typeof userDataType !== 'string' || arguments.length !== 2) {
        console.error("Invalid Arguments!");
        return [];
    }

    let trimmedType = '';
    let started = false;
    for (let i = 0; i < userDataType.length; i++) {
        let char = userDataType[i];
        if (!started && char !== ' ') {
            started = true;
        }
        if (started) {
            trimmedType += char;
        }
    }

    let finalTrimmed = '';
    for (let i = 0; i < trimmedType.length; i++) {
        if (i === trimmedType.length - 1 && trimmedType[i] === ' ') {
            break;
        }
        finalTrimmed += trimmedType[i];
    }

    let inputDataToLower = finalTrimmed.toLowerCase();

    let defaultDataTypes = [
        'string',
        'number',
        'boolean',
        'bigint',
        'object',
        'function',
        'undefined',
        'symbol'
    ];

    let isValidDataType = false;
    for (let i = 0; i < defaultDataTypes.length; i++) {
        if (defaultDataTypes[i] === inputDataToLower) {
            isValidDataType = true;
            break;
        }
    }

    if (!isValidDataType) {
        console.error("Not a Valid Input DataType");
    }

    let result = [];
    for (let i = 0; i < userInputArray.length; i++) {
        if (typeof userInputArray[i] !== inputDataToLower) {
            result[result.length] = userInputArray[i];
        }
    }

    return result;
}



// console.log(filterOut(["abcdef", 23232, "d", 23], "boolean"))
console.log(filterOut(["abcdef", 23232, "d", 23], "njnj"))
// console.log(filterOut(["Lowercase", 20, "is", 30, "also" ,100, "done", true],"NuMBer"))
// console.log(filterOut(["abcdef",23232, false, "d",23], "       string   "))
// console.log(filterOut(["abcde", "efg", "hijk", 200], 200))
// console.log(filterOut([90, 23, "hi"], "string", 89))
// console.log(filterOut(null,null))
// console.log(filterOut([ true,89 , "hi"], undefined))