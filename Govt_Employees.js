
const data = require('C:/Users/v-shanmugm/Documents/CountryDetails/people_dataset_500.json');

function findGovtFemaleEmployee(data) {
    let result = 0;

    for (let i = 0; i < data.length; i++) {
        let currentData = data[i];

        if (
            typeof currentData.gender !== 'string' &&
            currentData.gender.toLowerCase() !== 'female' &&
            typeof currentData.country !== 'string' &&
            typeof currentData.income !== 'number'
        ) {
            console.log("Invalid Input")
        }

        if (currentData.sector === "government"
            || currentData.sector === "public-sector"
            || currentData.email.includes(".gov")) {

            result += 1;

        }
    }
    return "Count of Female Government employees are: " + result;
}


console.log(findGovtFemaleEmployee(data))

