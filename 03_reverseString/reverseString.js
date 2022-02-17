const reverseString = function(message) {
    let messageArray = message.split('').reverse();
    let reversedMessage = '';
    for (i = 0; i < messageArray.length; i++) {
        reversedMessage += messageArray[i];
    }
    return reversedMessage;
};

// Do not edit below this line
module.exports = reverseString;
