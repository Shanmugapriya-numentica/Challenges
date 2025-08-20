// 2. Convert to minutes
// Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

function convertHourToMinutes(userInput) {
    if (typeof userInput !== 'string') {
        console.error("Input invalid: not a string");
    }

    let minutesPerHour = 60;
    let hours = 0;
    let minutes = 0;

    if (userInput[1] === ':') {
        let hourDigit = userInput[0];
        let minuteFirstDigit = userInput[2];
        let minuteSecondDigit = userInput[3];

        if (hourDigit < '0' || hourDigit > '9' ||
            minuteFirstDigit < '0' || minuteFirstDigit > '9' ||
            minuteSecondDigit < '0' || minuteSecondDigit > '9') {
            console.error("Input invalid: not numeric");
        }

        hours = parseInt(hourDigit);
        minutes = parseInt(minuteFirstDigit + minuteSecondDigit);
    }

    else if (userInput[2] === ':') {
        let hourFirstDigit = userInput[0];
        let hourSecondDigit = userInput[1];
        let minuteFirstDigit = userInput[3];
        let minuteSecondDigit = userInput[4];

   
        if (hourFirstDigit < '0' || hourFirstDigit > '9' ||
            hourSecondDigit < '0' || hourSecondDigit > '9' ||
            minuteFirstDigit < '0' || minuteFirstDigit > '9' ||
            minuteSecondDigit < '0' || minuteSecondDigit > '9') {
            console.error("Input invalid: not numeric");
            return 0;
        }

        hours = parseInt(hourFirstDigit + hourSecondDigit);
        minutes = parseInt(minuteFirstDigit + minuteSecondDigit);
    }


    else {
        console.error("Input invalid: format should be H:MM or HH:MM");
    }

    if (hours < 0 || minutes < 0 || minutes >= 60) {
        console.error("Input invalid: time out of range");
        return 0;
    }

    let totalMinutes = (hours * minutesPerHour) + minutes;
    return totalMinutes;
}


console.log(convertHourToMinutes("2:30"))
// console.log(convertHourToMinutes("2:90"))
// console.log(convertHourToMinutes("12:30"))
// console.log(convertHourToMinutes("-24:30"))
// console.log(convertHourToMinutes("24hr format"))