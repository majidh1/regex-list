
const fs = require("fs").promises;
const { logSuccess, logInfo } = require("./utils.js");
const { getContentFromTemplate,getContentListFromTemplate } = require("./template.service.js");

async function readAllRegexJsonFiles() {
    const folderPath = "./regexList";
    const files = await fs.readdir(folderPath);
    let result = "";
    logInfo("Start...");
    
    for (const file of files) {
        logInfo(`${file} Reading...`);
        const data = await fs.readFile(`${folderPath}/${file}`);
        const regexItem = JSON.parse(data);
        logInfo(`${file} Appending...`);
        if ("list" in regexItem) {
            result += getContentListFromTemplate(regexItem);
        }else{
            result += getContentFromTemplate(regexItem);
        }
        logSuccess(`${file} Done...`);
    }
    return result;
}

module.exports = {
    readAllRegexJsonFiles
}