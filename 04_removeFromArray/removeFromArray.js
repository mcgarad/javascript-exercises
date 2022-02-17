const removeFromArray = function(list, ...removedValues) {
    let filteredList = []
    for (i = 0; i < list.length; i++){
        if (removedValues.includes(list[i])) {
            continue;
        } else {filteredList.push(list[i])}
    }
    return filteredList;
};

// Do not edit below this line
module.exports = removeFromArray;
