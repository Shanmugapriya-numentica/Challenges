//findCommon([1, 3, 33, 8], [76, 8, 13, 54])

function findingCommonNumbers(inputArray){
    if ( !Array.isArray(inputArray)
        || inputArray.length !==2 
        || !Array.isArray(firstSubArray)
        || !Array.isArray(secondSubArray)
    ) 
    let finalArray = [];
    let firstSubArray = inputArray[0];
    let secondSubArray = inputArray[1];
     {
        console.log(" Entered Input is Not Valid!!");
        return finalArray;
    }

    for (let i = 0 ; i< firstSubArray.length ; i++ ){
        firstArrayValue = firstSubArray[i];

        for (let j = 0 ; j < secondSubArray.length ; j++ ){
            secondArrayValue = secondSubArray[j];

            if ( firstArrayValue === secondArrayValue){
                let repeatedValue = false;
                
                for (let k = 0 ; k < finalArray.length ; k++ ){      //to not to repeat values in new array
                    if (finalArray[k] === firstArrayValue){
                        repeatedValue = true;
                        break ; 
                    }
                } 
                if (repeatedValue = true){
                    finalArray.push(firstArrayValue);
                }
            } 
        }
    }
return finalArray

}

// console.log("The Elements are: ",findingCommonNumbers([[1,2,3,6,4],[3,5,6,7,8]]))

console.log(findingCommonNumbers([[1,2,3,6,4],"hi"]))
