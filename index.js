document.getElementById("clickMe")
function rollDice(){
//generate random numbers, 1-6//
var randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

//change images//
document.getElementById("img1").src = "images/dice" + (randomNumber) + ".png";
document.getElementById("img2").src = "images/dice" + (randomNumber2) + ".png";

//change header text based on which die is greater in value//
if (randomNumber > randomNumber2) {
    document.getElementById("title").innerHTML = '🚩 Player 1 Wins!'
} else if (randomNumber2 > randomNumber) {
    document.getElementById("title").innerHTML = 'Player 2 Wins! 🚩'
} else {
    document.getElementById("title").innerHTML = 'Draw!'
}
console.log(randomNumber);
}

