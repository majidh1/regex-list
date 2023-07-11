const color = require("cli-color");

module.exports = {
    raiseError(msg){
        console.log(color.red(msg))
        throw new Error(msg);
    },
    logInfo(msg){
        console.log(color.yellow(msg))
    },
    logSuccess(msg){
        console.log(color.green(msg))
    }
}