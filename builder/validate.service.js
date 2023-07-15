function checkValidateRegex(regexItem){
    regexItem.passTest.forEach(item => {
        if (!RegExp(regexItem.regex).test(item))
            raiseError("Invalid Regex => " + item + " not passed by " + regexItem.regex)
    });

    regexItem.rejectTest.forEach(item => {
        if (RegExp(regexItem.regex).test(item))
            raiseError("Invalid Regex => " + item + " passed by " + regexItem.regex)
    });
}

module.exports = {
    checkValidateRegex
}