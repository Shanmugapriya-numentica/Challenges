function findingCommonNumbers(inputArray){
    let finalArray = [];
    let firstSubArray = inputArray[0];
    let secondSubArray = inputArray[1];

    if ( inputArray.length !==2  || !Array.isArray(firstSubArray) || !Array.isArray(secondSubArray)
    ) 
     {
        console.log(" Entered Input is Not Valid!!");
        return finalArray;
    }

    for (let i = 0 ; i< firstSubArray.length ; i++ ){

        if (typeof firstSubArray[i] !== 'number' ) {
            console.log("Array should only contain numbers");
            return "Input Invalid";
        }

        let firstArrayValue = firstSubArray[i];
        for (let j = 0 ; j < secondSubArray.length ; j++ ){
            let secondArrayValue = secondSubArray[j];
            
            if( typeof secondSubArray[j] !== 'number'){
                return 'invalid'
            }

            if ( firstArrayValue === secondArrayValue){
                let isRepeatedValue = false;

                for (let k = 0 ; k < finalArray.length ; k++){
                    if (finalArray[k] === firstArrayValue){
                        isRepeatedValue = true;
                        break;
                    }
                }
                if (!isRepeatedValue) {
                    finalArray.push(firstArrayValue);
                }
            }       
        }
    }
return finalArray

}

// console.log("Common Elements are: ",findingCommonNumbers([[12,3,60,4,7,50,8,89],[7,50,4,8]]))
// console.log(findingCommonNumbers([[1,2,3,6,4],"hi"]))
// console.log(findingCommonNumbers([[1, 3, 33, 8], [6,7,90,33, 8]]))
// console.log(findingCommonNumbers([["a","b","c","d"], ["a",'c']]));
console.log(findingCommonNumbers([[1,2,3,6,4,4,5,2],[1,5,5, 3, 4]]));
