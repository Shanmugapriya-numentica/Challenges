//	fox i  n the b ox  
function removeSpaces(userInput){
    if ( typeof userInput !== 'string'){
    return "Sorry!, Input is Invalid!!";
}
    
    let newWord ='';

    for (let i=0 ; i < userInput.length; i++ ){  

            if (userInput[i] !== " "){                                          
                newWord = newWord + userInput[i];                                  
            }            
    }

    return '"'+newWord+'"';

}

console.log(removeSpaces("   fox i  n the b ox"))
// console.log(removeSpaces(92892384));
// console.log(removeSpaces("9656 yy y7 878"))
// console.log(removeSpaces(NaN))
// console.log(removeSpaces(-7676))
