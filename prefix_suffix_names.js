//addSuffixOrPrefix("arun", "mr", "prefix") --> Mr Arun
//Input: addSuffixOrPrefix("charles", "jr", "suffix") --> Should outupt : Charles Jr


function addPrefixOrSuffix(inputName, preOrSuffix, whereToJoin ){

    if (whereToJoin == "prefix" || whereToJoin == "PREFIX" || whereToJoin == "Prefix "){
        console.log("Joining Prefix", preOrSuffix+ " " + inputName);        
    }
    else if (whereToJoin == "suffix" || whereToJoin == "SUFFIX" || whereToJoin == "Suffix" ) {
        console.log(inputName +" "+ preOrSuffix);
        
        
    } else {
        console.log(" Not valid");
           
    }


}

addPrefixOrSuffix("jon", "mr", "PREFIX")
//addPrefixOrSuffix("jo", "jr", "suffix")

