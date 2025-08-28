const data = require('C:/Users/v-shanmugm/Documents/CountryDetails/people_dataset_500.json');


function getUniqueMails(data) {
    const uniqueEmails = [];
    const seenEmails = {};
    let duplicatesRemoved = 0;

    for (const citizen of data) {
        const email = citizen.email;

        if (typeof email !== 'string' || email.trim() === '') {
            console.error("Invalid Input!");
            return {};
        }



        if (!seenEmails[email]) {
            seenEmails[email] = true;
            uniqueEmails.push(email);
        } else {
            duplicatesRemoved++;
        }
    }

    return {
        duplicatesRemoved,
        uniqueEmails
    };
}

console.log(getUniqueMails(data))
