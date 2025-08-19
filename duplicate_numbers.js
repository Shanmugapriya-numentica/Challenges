// 3. Find all duplicates in an array
// Input: [1, 2, 3, 2, 4, 5, 3, 6]
// Output: [2, 3]

function findDuplicates(userInputArray) {
    if (!Array.isArray(userInputArray) || arguments.length !== 1) {
        console.error("invalid Input!");
    }

    let result = [];

    for (let i = 0; i < userInputArray.length; i++) {
        for (let j = i + 1; j < userInputArray.length; j++) {
            if (userInputArray[i] == userInputArray[j]) {

                if (!(userInputArray[i] in result)) {
                    result.push(userInputArray[i]);
                }
            }
        }
    }

    return result;
}


console.log(findDuplicates([1, 2, 3, 2, 4, , 7, 5, 3, 6, 7]))
console.log(findDuplicates("hi"))
// console.log(findDuplicates([12,23,34], "lp"))
// console.log(findDuplicates([12,23,34,23, ,12, "pk"]))
