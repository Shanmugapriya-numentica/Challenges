
const data = require('C:/Users/v-shanmugm/Documents/CountryDetails/people_dataset_500.json');

function findAverageIncome(data) {
    const countryStats = {};

    for (let i = 0; i < data.length; i++) {
        const currentData = data[i];

        if (
            currentData.income < 0 ||
            typeof currentData.country !== 'string' ||
            typeof currentData.income !== 'number'
        ) {
            console.error("Input Invalid");
        }

        if (currentData.income > 100) {
            const country = currentData.country;

            if (!countryStats[country]) {
                countryStats[country] = {
                    country: country,
                    count: 0,
                    totalIncome: 0
                };
            }
            countryStats[country].count += 1;
            countryStats[country].totalIncome += currentData.income;
        }
    }

    const filteredArray = Object.values(countryStats)
        .filter(c => c.count >= 10)
        .map(c => ({
            country: c.country,
            count: c.count,
            avgIncome: Number((c.totalIncome / c.count).toFixed(2))
        }));

    filteredArray.sort((a, b) => b.count - a.count);

    return filteredArray;
}


console.log(findAverageIncome(data))