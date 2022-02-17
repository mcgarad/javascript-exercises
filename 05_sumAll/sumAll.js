const sumAll = function(startNum, endNum) {
    let sum = 0;
    let lowNum = 0;
    let highNum = 0;
    if (validateInput(startNum) && validateInput(endNum)) {
        if (startNum < endNum) {
            lowNum = startNum;
            highNum = endNum;
        } else {
            lowNum = endNum;
            highNum = startNum;
        }
        for (let i = lowNum; i <= highNum; i++) {
            sum += i;
        }
        return sum;
    } else {return 'ERROR'}
};

const validateInput = function(checkedInput) {
    let valid = true;
    if (Number.isInteger(checkedInput) === false || checkedInput < 0) {
        valid = false;
    }
    return valid;
};

// Do not edit below this line
module.exports = sumAll;
