function getContentFromTemplate(regexItem){
    const itemTemplate = `
<details>
    <summary>[title]</summary>
    <br>
    [description]
    <br>
    نمونه صحیح: [passTest]
    <br>
    <br>

\`\`\`js
[regex]
\`\`\`
</details>
`;
    return itemTemplate
        .replace("[title]", regexItem.title)
        .replace("[description]", regexItem.description)
        .replace("[regex]", regexItem.regex)
        .replace("[passTest]", regexItem.passTest.join(", "));
}

function getContentListFromTemplate(regexItem){
    let result = `
<details dir="rtl">
    <summary>${regexItem.title}</summary>
    <br>
    ${regexItem.description ? regexItem.description +"\n<br>\n" : ""}
</detailsLast>
    `

    regexItem.list.forEach(item => {
        result = result.replace("</detailsLast>",getContentFromTemplate(item)+"\n</detailsLast>")
    });

    return result.replace("</detailsLast>","</details>");
}

module.exports = {
    getContentFromTemplate,
    getContentListFromTemplate
}