console.log("The javascript is now running");

//DECLARING VARIABLES

//variables for wins and losses
var wins = 0;
var losses = 0;

//randomNumber variable
var randomNumber = Math.floor(Math.random() * (120-19+1) + 19);
console.log(randomNumber);

//value of each crystal
var blueCrystal = Math.floor(Math.random() * (12-1+1) + 1);
console.log("Blue Crystal Value: " + blueCrystal);

var greenCrystal = Math.floor(Math.random() * (12-1+1) + 1);
console.log("Green Crystal Value: " + greenCrystal);

var purpleCrystal = Math.floor(Math.random() * (12-1+1) + 1);
console.log("Purple Crystal Value: " + purpleCrystal);

var redCrystal = Math.floor(Math.random() * (12-1+1) + 1);
console.log("Red Crystal Value: " + redCrystal);

var score = blueCrystal + greenCrystal + purpleCrystal + redCrystal;

$(document).ready(function() {


$("#random-number").text(randomNumber);

    $("#blue").on("click", function() {

        alert("You clicked the blue crystal");
        $("#score").html(score);
    });

    $("#green").on("click", function() {

        alert("You clicked the green crystal");
        $("#score").html(score);

    });

    $("#purple").on("click", function() {

        alert("You clicked the purple crystal");
        $("#score").html(score);
    });

    $("#red").on("click", function() {
        
        alert("You clicked the red crystal");
        $("#score").html(score);

    });


    if (score > randomNumber) {
        alert("You have gone above the random number. You lose!");
    }

    else if (score === randomNumber) {
        wins++;
    }

//ends the entire function
});