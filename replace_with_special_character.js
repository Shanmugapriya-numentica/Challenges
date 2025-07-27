
function replaceWithSpecialValue( InputString, position, wordToBeReplaced){

    if ( typeof InputString !== 'string' || typeof position !== 'string' 
        || typeof wordToBeReplaced !== 'string' || arguments.length !==3 ){
            return "Input Invalid" ;
        }

    let word = InputString.split('');

    for (let i = 0 ; i < word.length -1 ; i++ ){
        if ( word[i] === position){
            word [ i + 1] = wordToBeReplaced ;
        }
    }
    return word.join('') ;
}

console.log(replaceWithSpecialValue("cat in the box", "c","@"))
// console.log(replaceWithSpecialValue("abcd", 12))
// console.log(replaceWithSpecialValue([12.23,45,98], "ki"))
// console.log(replaceWithSpecialValue(null,null,90))