console.log("The javascript is now running");

//DECLARING VARIABLES

//variables for wins and losses
var wins = 0;
var losses = 0;

//need to create variables for the crystals
var blueCrystal;
var greenCrystal;
var redCrystal;
var purpleCrystal;

//variable for score
var score = 0;

//randomNumber variable
var randomNumber = Math.floor(Math.random() * (120-19+1) + 19);
console.log(randomNumber);

//value of each crystal
var crystalValue = Math.floor(Math.random() * (12-1+1) + 1);
console.log(crystalValue);

$(document).ready(function() {


$("#random-number").text(randomNumber);

    $("#blue").on("click", function() {
        blueCrystal = crystalValue;
        $("#score").text(crystalValue);
    });

    $("#green").on("click", function() {
        greenCrystal = crystalValue;
        $("#score").text(crystalValue);
    });

    $("#purple").on("click", function() {
        purpleCrystal = crystalValue;
        $("#score").text(crystalValue);
    });

    $("#red").on("click", function() {
        redCrystal = crystalValue;
        $("#score").text(crystalValue);
    });

    if (crystalValue > randomNumber) {
        alert("You have gone above the random number. You lose!");
        losses++;
    }

    else if (crystalValue === randomNumber) {
        wins++;
    }
//ends the entire function
});