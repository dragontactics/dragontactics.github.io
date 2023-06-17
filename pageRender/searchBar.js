const button = document.getElementById('searchButton');
const searchBar = document.getElementById('searchTextBox');

var bubbles = document.getElementsByClassName("bubbleItem");
var names = document.getElementsByClassName("title");

var testText = document.getElementById("testText");


button.onclick = () => {
    //Searches for and make hidden bubbles
    let searchWords = searchBar.value.toLowerCase(); 

    for(let counter = 0; counter < bubbles.length; counter++) {
        var name = names[counter].innerHTML.toLowerCase();
        var bubble = bubbles[counter];

        if(name.includes(searchWords)){
            bubble.style.display = "";
        }else {
            bubble.style.display = "none";
        }
    }


}
