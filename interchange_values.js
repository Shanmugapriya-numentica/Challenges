
function interChangeValuesInArray(userInput){
    if (!Array.isArray(userInput) || userInput.length !== 2 ) {
        return "Input Should Conatin Array and Element";
    }

    let subArray = userInput[0];
    let valueToBeChanged = userInput[1];

    if (!Array.isArray(subArray) || subArray.length === 0 || typeof valueToBeChanged !== 'number' || !Number) {
        return "Input Invalid, Please Enter Valid Input";
    }

    if (valueToBeChanged < 1 || valueToBeChanged > subArray.length) {
        return "Not a Valid Input";
    }

    let newArray = subArray.slice();

    if (valueToBeChanged === subArray.length) {
        [newArray[0], newArray[subArray.length - 1]] = [newArray[subArray.length - 1], newArray[0]];    
       
    }
    else {
        [newArray[valueToBeChanged - 1], newArray[valueToBeChanged]] = [newArray[valueToBeChanged], newArray[valueToBeChanged - 1]];
    }

    return newArray;

}


console.log(interChangeValuesInArray([[1, 2, 3, 4, 5], 2]));
//console.log(interChangeValuesInArray([[1, 2, 3, 4, 5], 5]));
//console.log(interChangeValuesInArray([[1, 2, 3, 4, 5], 0]));
//console.log(interChangeValuesInArray([[1, 2, 3, 4, 5], "hi"]));
//console.log(interChangeValuesInArray(["Hello", 6]));
//console.log(interChangeValuesInArray([3, 6]));
//console.log(interChangeValuesInArray(["", ""]));
