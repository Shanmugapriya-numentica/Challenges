
function interChangeValuesInArray(subArray,indexValue){
    if (!Array.isArray(subArray) || arguments.length !== 2
        || typeof indexValue !== 'number' ) {
        return "Input Should Conatin Array and Element";
    }

    if (!Array.isArray(subArray) || subArray.length === 0 || 
        typeof indexValue !== 'number' || !Number) {
        return "Input Invalid, Please Enter Valid Input";
    }

    if (indexValue < 1 || indexValue > subArray.length) {
        return "Not a Valid Input";
    }

    let newArray = subArray.slice();

    if (indexValue === subArray.length) {
        [newArray[0], newArray[subArray.length - 1]] = [newArray[subArray.length - 1], newArray[0]];    
       
    }
    else {
        [newArray[indexValue - 1], newArray[indexValue]] = [newArray[indexValue], newArray[indexValue - 1]];
    }

    return newArray;

}


console.log(interChangeValuesInArray([1, 2, 3, 4, 5], 2));
console.log(interChangeValuesInArray([1, 2, 3, 4, 5], 5));
console.log(interChangeValuesInArray([1, 2, 3, 4, 5], 0));
console.log(interChangeValuesInArray([1, 2, 3, 4, 5], "hi"));
console.log(interChangeValuesInArray("Hello", 6));
console.log(interChangeValuesInArray(3, 6));
console.log(interChangeValuesInArray("", ""));
