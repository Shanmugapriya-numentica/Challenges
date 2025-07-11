// Input : interChange([10, 20, 30, 40, 50], 5)       a[4] = 10 , a[0] = a[4]
// Output: [10, 30, 20]

function interChange(inputArray, nthPosition){
    numberOfElements = inputArray.length;
    if (nthPosition <= inputArray.length)
        {
    if ( nthPosition == inputArray.length)
    {  temporaryPlaceholder_1 = inputArray[nthPosition-1]
        inputArray[numberOfElements-1] = inputArray[0]
        inputArray[0] = temporaryPlaceholder_1
       }
     
    temporaryPlaceholder_2 = inputArray[nthPosition-1]
    inputArray[nthPosition-1]  = inputArray[nthPosition]
    inputArray[nthPosition] = temporaryPlaceholder_2
    console.log(inputArray);
    }
    else{
        console.log("Not a Valid Input");
        
    }
    }

interChange([10, 20, 30, 40, 50], 3)
//interChange([10, 20, 30, 40, 50], 6)
//interChange("hello")
//interChange(9,8,6)
