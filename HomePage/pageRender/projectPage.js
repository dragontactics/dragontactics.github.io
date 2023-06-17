import projects from '../data/projects.json' assert {type: 'json'};
const results = document.getElementById('flexSearchResults');

projects.forEach(project => {
    let template = `
    <div class = "bubbleItem">
        <img class ="projectImg" src="${project.imgSource}">
                <div class = "rightBubbleGrid">
                    <div class = "title">${project.header}</div>
                    <div class = "bubbleDescription">
                    ${project.description}
                </div>
        </div>
    </div>
    `
    results.innerHTML = results.innerHTML + template;
})

