// // Inside index.js, create a new variable called randomNumber1 
// then set the value of this variable to a random number between 1 
// and 6. Test it out in the console to make sure it works as expected.

let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

// Use the random number you created in the last step to pick out a random 
// dice image between dice1.png to dice 6.png then place 
// this image inside the left <img> element.

let randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6..png

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img", ) [0];

image1.setAttribute("src", randomImageSource);

//segunda imagen

let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//cambiar el h1

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) 
    {
    document.querySelector("h1").innerHTML= "Player 2 Wins!";
} else 
{
    document.querySelector("h1").innerHTML = "Play Again";
}


