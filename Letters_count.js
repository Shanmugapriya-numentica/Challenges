function countLetters(userInputWord) {
    if(typeof userInputWord !== 'string' || userInputWord === null 
          || userInputWord === undefined || userInputWord.length === 0 ) {
        return "Not a valid string Input";
    }       

    let numberOfLetters = 0 ;
    for ( let i =0 ; i < userInputWord.length ; i++ ){
        if(typeof userInputWord === 'string' && userInputWord[i] !== " ") {      
        numberOfLetters++;       
        }
    }   
    return numberOfLetters ;
}

// console.log(countLetters("NumenticaUI Internship"))
// console.log(countLetters("123!@#"))
// console.log(countLetters(12345)) 
// console.log(countLetters([1,2,3,4,]))
// console.log(countLetters(null))
// console.log(countLetters(undefined))
// console.log(countLetters("      "))
