const findTheOldest = function(people) {
    let currentDate = new Date();
    for (i of people) {
        if ("yearOfDeath" in i) {
            i.age = i.yearOfDeath - i.yearOfBirth;
        } else {
            i.age = currentDate.getFullYear() - i.yearOfBirth;
        };
    };
    const byAge = people.sort((a, b) => a.age > b.age ? -1 : 1)
    return byAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
