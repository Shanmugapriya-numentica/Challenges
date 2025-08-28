
const data = require('C:/Users/v-shanmugm/Documents/CountryDetails/people_dataset_500.json');

function findTopTaxPayers(data) {
  const taxpayers = [];

  for (const citizen of data) {

    if (
      typeof citizen !== 'object' ||
      typeof citizen.id !== 'number' ||
      typeof citizen.name !== 'string' ||
      typeof citizen.country !== 'string' ||
      typeof citizen.taxes !== 'object' ||
      citizen.taxes === null
    ) {
      console.error('Invalid citizen data skipped:', citizen);
      return '';
    }

    let vat = 0;
    let incomeTax = 0;
    let socialSecurity = 0;

    if (typeof citizen.taxes.vat === 'number') {
      vat = citizen.taxes.vat;
    }

    if (typeof citizen.taxes.income_tax === 'number') {
      incomeTax = citizen.taxes.income_tax;
    }

    if (typeof citizen.taxes.social_security === 'number') {
      socialSecurity = citizen.taxes.social_security;
    }

    const totalTax = vat + incomeTax + socialSecurity;

    taxpayers.push({
      name: citizen.name,
      country: citizen.country,
      totalTax
    });
  }

  taxpayers.sort((a, b) => b.totalTax - a.totalTax);

  const top10 = taxpayers.slice(0, 10);

  console.log(top10);

  return top10;
}

console.log(findTopTaxPayers(data))
