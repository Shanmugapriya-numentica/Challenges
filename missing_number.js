// Find the missing numbers in an array
// Input: [68, 71, 69, 73]
// Output: missing numbers in range [68-73] is 70, 72


function findMissingNumber(userInputArray) {
    if (!Array.isArray(userInputArray) || arguments.length !== 1) {
        return "Input is Invalid!"
    }
    let result = [];


    let sortedArray = userInputArray.sort();
    let startValue = sortedArray[0];
    let endValue = sortedArray[sortedArray.length - 1];

    if(typeof startValue !=='number' || typeof endValue !=='number'){
        return "Array should contain Only Numbers!!"
    }

    for (let i = startValue; i <= endValue; i++) {

        if (!sortedArray.includes(i)) {
            result.push(i)
        }

    }

    return "Missing Numbers are: " + result;
}


console.log(findMissingNumber([68, 71, 69, 73]))
// console.log(findMissingNumber("Happy NewYear!!"))
// console.log(findMissingNumber([10, 19, 20]))
// console.log(findMissingNumber(["hello","l"]))
// console.log(findMissingNumber([null])



