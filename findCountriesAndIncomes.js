// Find the country which has the highest income.
// Find the country which has the combined highest income
// Get all the users info (complete info) who has the email which ends with .gov
// Find the country name which has the maximum combined income for Female


const data = require('C:/Users/v-shanmugm/Documents/c/day_15_challenges/file.json');

//1
function findCountryWithHighestIncome(data) {

    if (!Array.isArray(data)) {
        console.error("Input Invalid");
    }
    let country = '';
    let maxIncome = 0;

    for (let i = 0; i < data.length; i++) {

        if (data[i].country !== 'string' || data[i].income !== 'number'
            || data[i].country.length <= 0 || data[i].income <= 0) {
            console.error("Input Invalid");
            return '';
        }

        let income = Number(data[i].income);
        if (income > maxIncome) {
            maxIncome = income;
            country = data[i].country;
        }
    }
    return "Country which has the highest income is: " + country;
}

//2
function findRichestCountry(data) {

    let countrywise = {};

    for (let i = 0; i < data.length; i++) {

        let currentCountry = data[i].country;
        let income = data[i].income;

        if (typeof currentCountry !== 'string' ||
            typeof income !== 'number' ||
            income < 0) {
            console.error("Input Invalid!");
            return '';
        }

        if (!countrywise[currentCountry]) {
            countrywise[currentCountry] = 0;
        }
        countrywise[currentCountry] += income;

    }
    let richestCountry = '';
    let highestIncome = 0;

    for (let country in countrywise) {
        if (countrywise[country] > highestIncome) {
            richestCountry = country;
            highestIncome = countrywise[country];
        }
    }
    return richestCountry;
}

//3
function findCountryWithMaxFemaleIncome(dataArray) {
    const result = {};

    for (let i = 0; i < dataArray.length; i++) {
        const currentData = dataArray[i];

        if (
            typeof currentData.gender === 'string' &&
            currentData.gender.toLowerCase() === 'female' &&
            typeof currentData.country === 'string' &&
            typeof currentData.income === 'number'
        ) {
            const country = currentData.country;

            if (!(country in result)) {
                result[country] = 0;
            }

            result[country] += currentData.income;
        }
    }

    let richestCountry = '';
    let maxIncome = 0;

    for (const country in result) {
        if (result[country] > maxIncome) {
            maxIncome = result[country];
            richestCountry = country;
        }
    }

    return richestCountry;
}

//4
function findResultsWhereMailEndsWithGov(data) {

    let result = [];

    for (let i = 0; i < data.length; i++) {

        let currentData = data[i];
        let currentMail = currentData.email;

        if (typeof email !== 'string') {
            let lowercaseMail = currentMail.toLowerCase();
            let n = lowercaseMail.length;

            if (lowercaseMail[n - 4] === '.' &&
                lowercaseMail[n - 3] === 'g' &&
                lowercaseMail[n - 2] === 'o' &&
                lowercaseMail[n - 1] === 'v'
            ) {

                result.push(currentData);
            }
        }

    } return result;
}

//5
function printPaginatedResults(pageWeAccess, resultsPerPage) {

    if (typeof pageWeAccess !== 'number' || typeof resultsPerPage !== 'number'
        || pageWeAccess <= 0 || resultsPerPage <= 0) {
        console.error("Input Invalid!");
        return [];
    }
    let result = [];

    let start = (pageWeAccess - 1) * resultsPerPage;
    let end = (resultsPerPage * pageWeAccess) - 1;

    for (let i = start; i < data.length && i < end; i++) {
        result.push(data[i]);
    }
    return result;
}

// console.log(findCountryWithHighestIncome(data))

// console.log(findRichestCountry(data))

// console.log(findCountryWithMaxFemaleIncome(data))

// console.log(findResultsWhereMailEndsWithGov(data))

// console.log(printPaginatedResults(2, 20))
// console.log(printPaginatedResults(-5, 10))
// console.log(printPaginatedResults("Hard Work", "never Fails"))
