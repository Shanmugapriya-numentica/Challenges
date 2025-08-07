// For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
// // checkInRange([10, 100], :sunglasses: // true false 8 is not in between 10 and 100

function checkInRange([startValue, endValue], valueToCheck){
    if(typeof startValue !=='number' || typeof endValue !=='number' || 
        startValue > endValue || typeof valueToCheck !=='number'){
        return "Input Invalid!!";
    }

    let result = true;

    if( valueToCheck > endValue || valueToCheck < startValue ){
        return "False"
    }

    return result;

}

console.log(checkInRange([1, 10], 4))
console.log(checkInRange([1, 10.8], 10.2))
console.log(checkInRange([1, 10], 224))
console.log(checkInRange([10, 100], 5))
console.log(checkInRange([1, 10], "hi"))
console.log(checkInRange("hello world!", 4))
console.log(checkInRange([10000, 10], 4))
console.log(checkInRange([1, 10], null))
