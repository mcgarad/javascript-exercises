const getTheTitles = function(books) {
    let resultList = []
    for (i in books) {
        resultList.push(books[i].title)
    };
    return resultList;
};

// Do not edit below this line
module.exports = getTheTitles;
