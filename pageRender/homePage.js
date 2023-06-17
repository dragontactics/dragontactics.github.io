import posts from '../data/posts.json' assert {type: 'json'};
const results = document.getElementById('devGrid');

posts.forEach(post => {
    let template = `
    <div class = "bubble">
            <div id="bubbleLeft">
                <div id = "date-time">${post.dateTime}</div>
            <div id = "imgForProgress"><img id="imgForProgressEdit" src = "${post.imgSource}" ></div>
            </div>
            <div id="bubbleRight">
                <div id = "memoHeader">${post.memoTitle}</div>
                <div id = "memoDescription">${post.memoDescription}</div>
            </div>
        </div>
    `
    results.innerHTML = results.innerHTML + template;
})