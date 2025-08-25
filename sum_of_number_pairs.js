// 2. Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2

function findNumberOfPairs(userInputArray, sumNumber) {
    if (!Array.isArray(userInputArray) || typeof sumNumber !== 'number') {
        console.error("Input Invalid!");
        return 0;
    }

    let matches = 0;

    for (let i = 0; i < userInputArray.length - 1; i++) {
        for (let j = i + 1; j < userInputArray.length; j++) {
            let sum = userInputArray[i] + userInputArray[j];
            if (sum === sumNumber) {
                matches += 1;
            }
        }
    }

    return matches;
}


// console.log(findNumberOfPairs([4, 2, 5, 6, 8, 1], 6))
// console.log(findNumberOfPairs([1, 9, 2, 8, 3, 7, 4, 6, 5, 5], 10))
// console.log(findNumberOfPairs([-5, 62, 5, 6, 8, 1], 6))
// console.log(findNumberOfPairs([-5, 5, 10,-10, 62, 15, 6, 8, 1], 0))
// console.log(findNumberOfPairs([4, 2, 5, 6, 8, 1], "hi"))
// console.log(findNumberOfPairs(["apple","berry","cherry","durian"], "1"))

