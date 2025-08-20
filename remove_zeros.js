// 4. Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") // output 123423423000
// removeZeros(input, "trailing") // output 000000123423423


function removeZeros(userInput, mode) {

    mode = mode.toLowerCase();
    if (typeof userInput !== 'string' || (mode !== 'leading' && mode !== 'trailing')) {
        console.error("Invalid input or mode!");
        return '';
    }

    let start = 0;
    let end = userInput.length - 1;

    if (mode === 'leading') {
        while (start <= end && userInput[start] === '0') {
            start++;
        }

        let result = '';
        for (let i = start; i <= end; i++) {
            result += userInput[i];
        }
        return result;

    } else if (mode === 'trailing') {
        while (end >= start && userInput[end] === '0') {
            end--;
        }

        let result = '';
        for (let i = 0; i <= end; i++) {
            result += userInput[i];
        }
        return result;
    }
}


console.log(removeZeros("000000123423423000", "leAding"));
console.log(removeZeros("000000123423423000", "trailing"));
console.log(removeZeros("0000000000", "leading"));
console.log(removeZeros("01000000000", "leading"));
console.log(removeZeros("1234", "trailing"));    