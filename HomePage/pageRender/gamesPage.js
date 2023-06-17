import games from '../data/games.json' assert {type: 'json'};
const results = document.getElementById('resultsOfSearchFlex');

games.forEach(game => {
    let template = `
    <div class = "bubbleItem">
    <div class = "imgDiv"><img class = "gamePic" src = "${game.imgSource}"></div>
    <div class = "title">${game.gameName}</div>
</div>
    `
    results.innerHTML = results.innerHTML + template;
})
