const fs = require("fs").promises;

async function writeReadmeFileContent(content) {
    const data = await fs.readFile("./builder/readme.template.txt");
    const template = data.toString("UTF8");
    let resultReadMe = template.replace("[items]", content);

    await fs.writeFile("README.md", resultReadMe);
}

module.exports = {
    writeReadmeFileContent
}