// 4. Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];



function filterOut(userInputArray, userDataType) {

    if (!Array.isArray(userDataType) || typeof userDataType !== 'string'
        || arguments.length !== 2) {
        return "Invalid Arguments!";
    }

    let newArray = [];
    let defaultDataTypes = ['string', 'number', 'boolean', 'bigint',
        'object', ' function', 'undefined', 'symbol', 'bigint'];
    let isValidDataType = false;

    let inputDataToLower = userDataType.trim().toLowerCase();

    for (let i = 0; i < defaultDataTypes.length; i++) {
        if (defaultDataTypes[i] === inputDataToLower) {
            isValidDataType = true;
            break;
        }
    }

    if (!isValidDataType) {
        return "Not a Valid Input DataType";

    }

    for (let i = 0; i < userInputArray.length; i++) {
        if (typeof userInputArray[i] !== inputDataToLower) {
            newArray[newArray.length] = userInputArray[i];
        }
    }

    return newArray;

}


console.log(filterOut(["abcdef", 23232, "d", 23], "number"))
// console.log(filterOut(["abcdef",23232, "d",23],"njnj"))
// console.log(filterOut(["Lowercase", 20, "is", 30, "also" ,100, "done", true],"NuMBer"))
// console.log(filterOut(["abcdef",23232, false, "d",23], "       string   "))
// console.log(filterOut(["abcde", "efg", "hijk", 200], 200))
// console.log(filterOut([90, 23, "hi"], "string", 89))
// console.log(filterOut(null,null))
// console.log(filterOut([ true,89 , "hi"], undefined))