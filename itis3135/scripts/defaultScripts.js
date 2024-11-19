const jsTest = document.getElementById("js-test");
const dateText = document.getElementById("date");
const moodMessageForm = document.getElementById("mood-message-form");
const moodMessageText = document.getElementById("mood-message");
const favnumText = document.getElementById("favnum-message");
const submitMood = document.getElementById("submit-mood");
const submitFavnum = document.getElementById("submit-favnum");
const submitSale = document.getElementById("submit-sale");
const saleText = document.getElementById("sale-text");
const gameRec = document.getElementById("game-rec");
const gameRecText = document.getElementById("game-rec-text");
const submitAge = document.getElementById("submit-age");
const ageText = document.getElementById("age-text");

/*
//check if script is running
jsTest.onclick = function() {
    alert("Hey my script is running"); 
};
*/

//display date
dateText.innerHTML = "Today's Date: " + Date();

//display mood message 
submitMood.onclick = (function displayMoodMessage() {
    let username = document.getElementById("username").value;
    let mood = document.getElementById("mood").value;

    if (username !== "" && mood !== "") {
        moodMessageText.innerHTML = `Liquid Eel welcomes you, ${username}! We're glad that you are feeling ${mood}!`;
    }
});

//favorite number
submitFavnum.onclick = (function favoriteNumber() {
    let favnum = Math.round(Math.abs(Number(document.getElementById("favnum").value)));
    let polygon;

    if (favnum > 10 || favnum < 0) {
        favnumText.innerHTML = "Number is out of range."; 
    } else {
        switch (favnum) {
            case 0:
                polygon = "not a polygon";
                break;

            case 1:
                polygon = "a monogon";
                break;
            
            case 2:
                polygon = "a bigon";
                break;
        
            case 3:
                polygon = "a triangle";
                break;

            case 4:
                polygon = "a quadrilateral";
                break;
            
            case 5:
                polygon = "a pentagon";
                break;

            case 6:
                polygon = "a hexagon";
                break;

            case 7:
                polygon = "a septagon";
                break;

            case 8:
                polygon = "an octagon";
                break;

            case 9:
                polygon = "a nonagon";
                break;
            
            case 10:
                polygon = "a decagon";
                break;

        }

        favnumText.innerHTML = `A polygon with ${favnum} sides is ${polygon}.`;
    }

});

//functions

//sale calculator
submitSale.onclick = (function calculateSale() {
    let gamePrice = Number(document.getElementById("game-price").value);
    let sale = Number(document.getElementById("sale").value);
    let salePrice = Math.floor(((gamePrice - (gamePrice * (sale / 100)))) * 100) / 100;

    saleText.innerHTML = `A $${gamePrice} game on sale for ${sale}% will be $${salePrice}`;
});

//game reccomendation
gameRec.onclick = (function gameRec() {
    const gameRecs = ["Psychonauts", "Alan Wake II", "Silent Hill 2", "Half-Life 2", "Portal", "Borderlands", "Slay the Princess", "Undertale", "Cult of the Lamb", "Hollow Knight"];
    
    gameRecText.innerHTML = `Try playing ${gameRecs[Math.floor(Math.random() * gameRecs.length)]}!`;
});

submitAge.onclick = (function ageRating() {
    const age = Math.round(Math.abs(Number(document.getElementById("age").value)));
    let text;

    if (age > 0 && age < 10) {
        text = "You can only play games that are rated E (Everyone)";
    } else if (age >= 10 && age < 13) {
        text = "You can play games that are rate E10+ (Everyone 10 and up) and below";
    } else if (age >= 13 && age < 17) {
        text = "You can play games that are rate T (Teen) and below";
    } else if (age === 18) {
        text = "You can play games that are rate M (Mature 17+) and below";
    } else if (age > 18) {
        text = "You can play games of any rating";
    }

    ageText.innerHTML = text;
});

//game selector
const gameTitle = document.getElementById("game-title");
const submitTitle = document.getElementById("submit-title");
const submittedGames = document.getElementById("submitted-games");
const chosenGame = document.getElementById("chosen-game");
const clearTitles = document.getElementById("clear-titles");

let gameTitles = [];

submitTitle.onclick = (function submitTitle() {
    if (gameTitle.value !== "") {
        gameTitles.push(gameTitle.value);
        submittedGames.innerHTML = `Current List: ${gameTitles}`;
        console.log(gameTitles);
    }
});

clearTitles.onclick = (function clearTitles() {
    gameTitles = [];
    submittedGames.innerHTML = "";
});