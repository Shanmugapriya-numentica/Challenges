// console.log(replaceWithNumbers("abc@123","d"))
function replaceNumbers( inputString, charToChange){

    if (typeof inputString !== 'string' || typeof charToChange !== 'string' 
        || inputString.length === 0 || charToChange.length === 0
        || arguments.length !== 2) {

        return "Input you've entered is invalid!"
    }

    let newResult = '';
    let isNumbersPresent = false;

    for (let i =0; i < inputString.length; i++){
        let currentValue = inputString[i];

        if( currentValue >='0' && currentValue <='9'){
            newResult += charToChange;
            isNumbersPresent = true;

        }else{
            newResult += currentValue;
        }        

    }
    if (isNumbersPresent === false){  
            return "There are no numbers in the string to replace!. It remains same as: " + '"'+inputString+'"' ;
        }
return newResult;

}

// console.log(replaceNumbers("abc@123","d"))
console.log(replaceNumbers("NeverGiveUp!","s"))
// console.log(replaceNumbers("  ","R"))
// console.log(replaceNumbers(123,"d"))
// console.log(replaceNumbers(null,""))
// console.log(replaceNumbers("abcd",[2]))
// console.log(replaceNumbers("abcd",undefined))
// console.log(replaceNumbers("Your Mark is: 0","100"))
// console.log(replaceNumbers("arun@123", "d","extraArguments"));

