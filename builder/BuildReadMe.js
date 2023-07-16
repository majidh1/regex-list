const { logSuccess, logInfo } = require("./utils.js");
const { writeReadmeFileContent } = require("./writer.service.js");
const { readAllRegexJsonFiles } = require("./reader.service.js");

(async function start() {
    const readmeItemsContent = await readAllRegexJsonFiles();
    logInfo("Writing... ReadMe.md");
    await writeReadmeFileContent(readmeItemsContent);
    logSuccess(`Done... => check ReadMe.md`);
})()

