
function findNthLargest(userInputArray, requiredLargest){

    if( !Array.isArray(userInputArray) || typeof requiredLargest !=='number' || 
        arguments.length !== 2 || userInputArray.length < requiredLargest || requiredLargest === 0){
            return "Entered Input is Invalid" ;
        }

    let numberOfElements = userInputArray.length ;
    let newArray = userInputArray ;

    for ( let i = 0 ; i < numberOfElements - 1 ; i++ ){
        for ( let j =0 ; j <numberOfElements - 1 -i ; j++ ){
            if (newArray[j] < newArray [j + 1]){

                let temprorayHolder = newArray[j] ;
                newArray[j] = newArray[ j + 1] ;
                newArray[ j+1 ] = temprorayHolder ;
            }
        }
    }
    return "Your "+ requiredLargest + " Largest Number is: " + newArray[ requiredLargest - 1] ;
}

console.log(findNthLargest([10,30,50,90],3))
// console.log(findNthLargest(null,9))
// console.log(findNthLargest([23,34,12],1,2))
// console.log(findNthLargest("hello","good morning"))
// console.log(findNthLargest(undefined,23))
// console.log(findNthLargest(1233332,9))

// console.log(findNthLargest([10,30,50,90],0))