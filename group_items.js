function groupByInitial(userInputArray) {
    if (!Array.isArray(userInputArray)) {
        console.error("Invalid Input!");
        return [];
    }

    let groupedNames = {};

    for (let i = 0; i < userInputArray.length; i++) {
        let name = userInputArray[i];

        if (typeof name !== 'string') {
            continue;
        }

        name = name.trim();

        if (name.length === 0) {
            continue;
        }


        let firstChar = name[0];
        if (!((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z'))) {

            continue;
        }

        let initial = firstChar.toLowerCase();

        if (!groupedNames[initial]) {
            groupedNames[initial] = [];
        }

        groupedNames[initial].push(name);
    }

    return Object.values(groupedNames);
}



console.log(groupByInitial(["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]))
// console.log(groupByInitial([" arun", "balu ", " cathy ", " krish", " aadhir", " aariketh", "kamal "]));
// console.log(groupByInitial(["arun", "", "  ", "balu", "cathy","abi"]));
// console.log(groupByInitial(["arun", 123, true, null, undefined, "balu"]));
// console.log(groupByInitial(["1arun", "!balu", "#cathy", "2krish", "$aadhir", "%aariketh", "&kamal"]));
// console.log(groupByInitial([]));
// console.log(groupByInitial(null));
// console.log(groupByInitial(undefined));
