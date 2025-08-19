// 2. Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

function findSumOfMultiples(userInputValues, timesMultiple) {
    if (typeof userInputValues !== "number" || typeof timesMultiple !== 'number') {
        console.error("Input Invalid");
        return NaN;

    }

    let eachMultiple = 0;
    let result = 0;
    for (let i = 0; i <= timesMultiple; i++) {
        eachMultiple = i * userInputValues;
        result += eachMultiple;
    }
    return result;
}



console.log(findSumOfMultiples(8, 3))
// console.log(findSumOfMultiples("10", 5))
// console.log(findSumOfMultiples(5,5))
// console.log(findSumOfMultiples(-10, 5))
// console.log(findSumOfMultiples(null, 3));
// console.log(findSumOfMultiples(undefined, 2));
