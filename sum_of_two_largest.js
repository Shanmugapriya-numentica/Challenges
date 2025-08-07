// Return the sum of two largest numbers
// Input: [32, 66, 80, 120, 45]
// Output: 200

function findSumOfTwoLargest(userInputArray) {
    if (!Array.isArray(userInputArray) || arguments.length !== 1) {
        return "Sorry!, Entered Input is Invalid";
    }

    let result = 0;

    let numberOfElements = userInputArray.length;
    let newArray = userInputArray;

    for (let i = 0; i < numberOfElements - 1; i++) {
        for (let j = 0; j < numberOfElements - 1 - i; j++) {

            if (newArray[j] < newArray[j + 1]) {

                let temprorayHolder = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temprorayHolder;
            }
        }
    }

    console.log(userInputArray);
    result = userInputArray[0] + userInputArray[1];

    return result;
}

// console.log(findSumOfTwoLargest([32, 12, 66, 80, 120, 45]))
// console.log(findSumOfTwoLargest([10,20,1000,2000]))
// console.log(findSumOfTwoLargest("Hello"))
// console.log(findSumOfTwoLargest([1,2],[12,34]))
