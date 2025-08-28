
const data = require('C:/Users/v-shanmugm/Documents/CountryDetails/people_dataset_500.json');

function getCountrySummary(data) {
    const countrySummary = {};

    for (const citizen of data) {
        const country = citizen.country;
        const income = citizen.income;
        const sector = citizen.sector;

        if (
            typeof country !== 'string' ||
            typeof income !== 'number' ||
            income < 0 ||
            typeof sector !== 'string'
        ) {
            console.error('Invalid citizen data skipped:', citizen);
            return [];
        }

        if (!countrySummary[country]) {
            countrySummary[country] = {
                totalPeople: 0,
                totalIncome: 0,
                governmentSectorCount: 0,
                privateSectorCount: 0
            };
        }

        const summary = countrySummary[country];

        summary.totalPeople += 1;
        summary.totalIncome += income;

        if (sector.toLowerCase() === 'government') {
            summary.governmentSectorCount += 1;
        } else if (sector.toLowerCase() === 'private') {
            summary.privateSectorCount += 1;
        }
    }

    for (const country in countrySummary) {
        const summary = countrySummary[country];
        summary.averageIncome = Number((summary.totalIncome / summary.totalPeople).toFixed(2));
        delete summary.totalIncome;
    }

    return countrySummary;
}

console.log(getCountrySummary(data));
