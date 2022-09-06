const fibonacci = function(fibIndex0) {
    let fibIndex = Number(fibIndex0);
    if (fibIndex < 1) {
        return "OOPS";
    } else if (fibIndex == 1 || fibIndex == 2) {
        return 1;
    } else {
        let secondLast = 1;
        let recentLast = 1;
        let fibNumber = 0;
        for (i of Array(fibIndex-2).keys()) {
            fibNumber = secondLast + recentLast;
            secondLast = recentLast;
            recentLast = fibNumber;
        }
        return fibNumber;
    };
};

// Do not edit below this line
module.exports = fibonacci;
