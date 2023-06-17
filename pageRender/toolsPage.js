import tools from '../data/tools.json' assert {type: 'json'};
const results = document.getElementById('resultsOfSearchFlex');

tools.forEach(tool => {
    let template = `
    <div class = "bubbleItem">
        <div class = "title">${tool.toolName}</div>
        <div class = "imgDiv"><img class = "toolPic" src = "${tool.imgSource}"></div>
    </div>
    `
    results.innerHTML = results.innerHTML + template;
})
