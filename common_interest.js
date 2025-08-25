

function findCommonInterest(students) {
    const bookMap = {};

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        for (let j = 0; j < student.books.length; j++) {
            const book = student.books[j];
            if (!bookMap[book]) {
                bookMap[book] = [];
            }
            bookMap[book].push(student.name);
        }
    }

    const shared = {};
    for (let i = 0; i < students.length; i++) {
        const studentA = students[i];
        shared[studentA.name] = {};
        for (let j = 0; j < students.length; j++) {
            if (i === j) continue;
            const studentB = students[j];
            for (let m = 0; m < studentA.books.length; m++) {
                const bookA = studentA.books[m];

                for (let n = 0; n < studentB.books.length; n++) {
                    const bookB = studentB.books[n];
                    if (bookA === bookB) {
                        shared[studentA.name][studentB.name] = true;
                    }
                }
            }
        }
    }

    let maxCount = 0;
    const maxStudents = [];

    for (const name in shared) {
        let count = 0;
        for (const other in shared[name]) {
            count++;
        }

        if (count > maxCount) {
            maxCount = count;
            maxStudents.length = 0;
            maxStudents.push(name);
        } else if (count === maxCount) {
            maxStudents.push(name);
        }
    }

    return {
        bookMap: bookMap,
        mostConnected: maxStudents
    };
}

const students = [
    {
        id: 0,
        name: 'Arun',
        books: ['Wings of Fire', 'Chakra'],
    },
    {
        id: 1,
        name: 'Ashok',
        books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
        id: 2,
        name: 'Balu',
        books: ['Wings of Fire', 'All about Cricket'],
    },
    {
        id: 3,
        name: 'Cathi',
        books: ['Against the wind', 'The Shining', 'War and Peace']
    },
];

const result = findCommonInterest(students);

for (const book in result.bookMap) {
    console.log(book + " - [" + result.bookMap[book].join(', ') + "]");
}

console.log("Students with most shared interests: " + result.mostConnected.join(', '));
