// You’re given a dataset of 500 records representing workers across multiple countries and sectors (government, private, NGO, public-sector). Each record includes fields like:
// id, name, gender, age, country, countryCode, sector, department, role, email, income, dependents, skills[], joined, performance, taxes{ vat, income_tax, social_security }, projects[]
// Acceptance Criteria
// Leading countries with income > 100

// Compute, for each country, the count and average of people with income > 100.
// Return a sorted array of { country, count, avgIncome } in descending order by count.
// Include only countries where count >= 10.

// 2. Number of females in government posts
// A person is considered government if either sector === "government" || sector === "public-sector" ortheir email domain looks government: ends with .gov, .gov.xx, gov.xx, or subdomains like *.gov.xx (e.g., dept.gov.in, agency.us.gov, gov.uk).
// Return a number: how many gender === "female" are in government.

// 3. Country snapshots (reduce + objects)
// Build an object keyed by country with value { totalPeople, avgIncome, govCount, privateCount }.
// { india: { totalPeople: 100, avgIncome: 32000, govCount: 300, privateCount: 100}

// 4. Top taxpayers (map + reduce)
// For each person, compute totalTax = taxes.vat + taxes.income_tax + taxes.social_security.
// Find the top 10 by totalTax

// 5. Return a unique list of  emails and report how many duplicates were removed.
// Conditions
// No external libs (e.g., Lodash, Ramda).
// Can use array and object methods
// After the end of session, i will ask you to write a random function in the conference room to check your understanding on the problem
// By 7 pm you should complete