

function addPrefixOrSuffix(inputName, preOrSuffix, whereToJoin) {

        
    if ( typeof inputName !== 'string' || typeof preOrSuffix !== 'string' 
        || typeof whereToJoin !== 'string') {
        return "Input Invalid";
    }

    if ( typeof whereToJoin.toLowerCase() !== 'prefix' 
            && typeof whereToJoin.toUpperCase() !== 'string'){
                return "Input Invalid!"
            }

     let nameParts = inputName.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        let nameOfPerson = nameParts.join(' ');  
         


    if (whereToJoin.toLowerCase() == "prefix") {

        let prefixToLower = preOrSuffix.toLowerCase();
        let prefixName = prefixToLower[0].toUpperCase() + prefixToLower.slice(1);

        return prefixName + " " + nameOfPerson;
    }

    if (whereToJoin.toLowerCase() == "suffix") {

        let suffixToLower = preOrSuffix.toLowerCase();
        let suffixName = suffixToLower[0].toUpperCase() + suffixToLower.slice(1);
        
        return nameOfPerson + " " + suffixName;
    }

}

console.log(addPrefixOrSuffix("vijay kumar", "mr", "PReFIX"))
console.log(addPrefixOrSuffix("jhon durairaj", "jr", "suffix"))
// console.log(addPrefixOrSuffix(["hello","hello"]))

