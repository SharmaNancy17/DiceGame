//Player1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "dice" +  randomNumber1 + ".png";
var randomSrcImg1 = "images/" + randomDiceImg1;
document.querySelectorAll("img")[0].setAttribute("src", randomSrcImg1);

//Player2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomSrcImg2 = "images/" + randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src",randomSrcImg2);

//whowon

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}