

function calculatedTotalHoursElapsed(startTimeString, endTimeString) {
    function convertTimeStringToMinutes(timeString) {
        let timeWithoutSpaces = "";
        for (let i = 0; i < timeString.length; i++) {
            if (timeString[i] !== ' ') {
                timeWithoutSpaces += timeString[i];
            }
        }

        let timeStringLength = 0;
        while (timeWithoutSpaces[timeStringLength] !== undefined) {
            timeStringLength++;
        }

        if (timeStringLength < 4) {
            console.error("Invalid time format");
            return null;
        }

        let amOrPmFirstChar = timeWithoutSpaces[timeStringLength - 2];
        let amOrPmSecondChar = timeWithoutSpaces[timeStringLength - 1];
        let amPmIndicator = "";

        if ((amOrPmFirstChar === 'A' || amOrPmFirstChar === 'a') &&
            (amOrPmSecondChar === 'M' || amOrPmSecondChar === 'm')) {
            amPmIndicator = "AM";
        } else if ((amOrPmFirstChar === 'P' || amOrPmFirstChar === 'p') &&
            (amOrPmSecondChar === 'M' || amOrPmSecondChar === 'm')) {
            amPmIndicator = "PM";
        } else {
            console.error("Invalid time format");
            return null;
        }

        let timePart = "";
        for (let i = 0; i < timeStringLength - 2; i++) {
            timePart += timeWithoutSpaces[i];
        }

        let colonPosition = -1;
        for (let i = 0; i < timePart.length; i++) {
            if (timePart[i] === ':') {
                colonPosition = i;
                break;
            }
        }

        if (colonPosition === -1) {
            console.error("Invalid time format");
            return null;
        }

        let hourString = "";
        for (let i = 0; i < colonPosition; i++) {
            hourString += timePart[i];
        }

        let minuteString = "";
        for (let i = colonPosition + 1; i < timePart.length; i++) {
            minuteString += timePart[i];
        }

        let hourNumber = parseInt(hourString, 10);
        let minuteNumber = parseInt(minuteString, 10);

        if (isNaN(hourNumber) || isNaN(minuteNumber)) {
            console.error("Invalid time format");
            return null;
        }

        if (minuteNumber < 0 || minuteNumber >= 60 || hourNumber < 1 || hourNumber > 12) {
            console.error("Invalid time format");
            return null;
        }

        if (amPmIndicator === "AM") {
            if (hourNumber === 12) {
                hourNumber = 0;
            }
        } else if (amPmIndicator === "PM") {
            if (hourNumber !== 12) {
                hourNumber += 12;
            }
        }

        return hourNumber * 60 + minuteNumber;
    }

    let startTimeInMinutes = convertTimeStringToMinutes(startTimeString);
    let endTimeInMinutes = convertTimeStringToMinutes(endTimeString);

    if (startTimeInMinutes === null || endTimeInMinutes === null) {
        return "Invalid input";
    }

    let differenceInMinutes = endTimeInMinutes - startTimeInMinutes;
    if (differenceInMinutes < 0) {
        differenceInMinutes += 24 * 60;
    }

    let elapsedHours = 0;
    while (differenceInMinutes >= 60) {
        elapsedHours++;
        differenceInMinutes -= 60;
    }

    let elapsedMinutes = differenceInMinutes;

    return elapsedHours + " hours " + elapsedMinutes + " minutes";
}



console.log(calculatedTotalHoursElapsed("9:00AM", "3:12 PM"));
console.log(calculatedTotalHoursElapsed("11:00 PM", "2:00 AM"));
// console.log(calculatedTotalHoursElapsed("12:30PM", "1:15 PM"));
// console.log(calculatedTotalHoursElapsed("12:00 AM", "12:00 PM"));
// console.log(calculatedTotalHoursElapsed("5:05AM", "6:05 AM"));
