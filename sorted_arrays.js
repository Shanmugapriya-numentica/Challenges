// Merge two arrays and sort them from lowest to highest
// Input: [1, 4, 6], [2, 5, 3]
// Output: [1, 2, 3, 4, 5, 6]


function sortarray(firstArray, secondArray) {

    if (!Array.isArray(firstArray) || !Array.isArray(secondArray) || arguments.length !== 2) {
        return "Invalid Input!"
    }

    for (let i of firstArray) {
        if (typeof i !== 'number') {
            return "Array should only contain numbers"
        }
    }

    for (let i of secondArray) {
        if (typeof i !== 'number') {
            return "Array should only contain numbers"
        }
    }

    let mergedArray = [...firstArray, ...secondArray];
    let noduplicat = [... new Set(mergedArray)];
    let sortedUniqueValues = noduplicat.sort();


    return sortedUniqueValues;


}

console.log(sortarray([1, 4, 6], [2, 5, 4, 1, 1, 3]))
// console.log(sortarray("hello", [2, 5, 4, 1, 1, 3]))
console.log(sortarray([1, 4, "p"], [2, 5, 4, 1, 1, 3]))
// console.log(sortarray( "Good Morning", "Good evening"))
// console.log(sortarray([1, 4, 6], [2, 5, 4, 1, 1, 3], [23,34,56]))