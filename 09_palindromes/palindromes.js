const palindromes = function (inputString) {
    let lowerString = inputString.toLowerCase().split("");
    let letArray = [];
    for (i in lowerString) {
        if (/[a-z]/.test(lowerString[i])) {
            letArray = letArray + [lowerString[i]];
        };
    };
    let letters = letArray.split("");
    let c = letters.length - 1;
    let isPalindrome = true
    for (i in letters) {
        if (letters[i] != letters[c]) {
            isPalindrome = false;
        };
        c = c - 1
    };
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
