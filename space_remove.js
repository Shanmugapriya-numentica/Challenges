//	fox i  n the b ox  
function removeSpaces(userInput){
    if ( typeof userInput == 'string'){
    let newWord ='';

    for (let i=0 ; i < userInput.length; i++ ){  

            if (userInput[i] !== " "){                                          
                newWord = newWord + userInput[i];                                  
            }            
    }
console.log("Answer is :",newWord);
}
else{
    console.log("Sorry!, Input is Invalid!!");
    
}}


//removeSpaces("   fox i  n the b ox")
// removeSpaces(92892384)
// removeSpaces("9656 yy y7 878")
//removeSpaces(NaN)
removeSpaces(-7676)
