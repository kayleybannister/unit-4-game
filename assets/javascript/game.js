console.log("The javascript is now running");

//DECLARING VARIABLES

//variables for wins and losses
var wins = 0;
var losses = 0;

//randomNumber variable
var randomNumber = Math.floor(Math.random() * (120-19+1) + 19);
console.log(randomNumber);

//variable to generate a random value of each crystal
var blueCrystal = Math.floor(Math.random() * (12-1+1) + 1);
var greenCrystal = Math.floor(Math.random() * (12-1+1) + 1);
var purpleCrystal = Math.floor(Math.random() * (12-1+1) + 1);
var redCrystal = Math.floor(Math.random() * (12-1+1) + 1);

//holds the value for the total score every time a crystal is clicked
var score = 0;

//creating runGame function to start the game each time
var runGame = function() {

blueCrystal;
    console.log("Blue Crystal Value: " + blueCrystal);

greenCrystal;
    console.log("Green Crystal Value: " + greenCrystal);

purpleCrystal;
    console.log("Purple Crystal Value: " + purpleCrystal);

redCrystal;
    console.log("Red Crystal Value: " + redCrystal);

//using jQuery to display the random number that the user must match to win the game
$("#random-number").html(randomNumber);
$("#score").html(score);

    //displays alert when blue crystal is clicked
    $("#blue").on("click", function() {

        alert("You clicked the blue crystal");
    });

    //displays alert when green crystal is clicked
    $("#green").on("click", function() {

        alert("You clicked the green crystal");
    });

    //displays alert when purple crystal is clicked
    $("#purple").on("click", function() {

        alert("You clicked the purple crystal");
    });

    //displays alert when red crystal is clicked
    $("#red").on("click", function() {
        
        alert("You clicked the red crystal");
    });


    //creating if/else statement so that if the score goes above the randomNumber, the user loses
    //else if the score exactly equals the randomNumber, the user wins
    //else, the user must continue playing until they either win or lose
    if (score > randomNumber) {
        alert("You have gone above the random number. You lose!");
        losses++;
    }

    else if (score === randomNumber) {
        wins++;
    }

    else {
        console.log("You need to keep going!");
    }

//ends the entire function
};


runGame();