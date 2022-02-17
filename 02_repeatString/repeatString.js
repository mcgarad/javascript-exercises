const repeatString = function(message, repetitions) {
    let repeatedString = '';
    if (repetitions < 0) {
        repeatedString = 'ERROR';
    } else {
        for (i = 1; i <= repetitions; i++) {
            repeatedString += message;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
