console.log("The javascript is now running");

//DECLARING VARIABLES

//variables for wins and losses
var wins = 0;
var losses = 0;

var randomNumber = 0;

//creating function to generate random value for randomNumber and each crystal
var generateRandom = function(min, max)
 {
    return Math.floor(Math.random() * (max - min + 1) + min);
 };

//creating runGame function to start the game each time
var runGame = function() {

    //random number variable
    randomNumber = generateRandom(19, 120);

    //crystal variables
    var blueCrystal = generateRandom(1, 12);
    var greenCrystal = generateRandom(1, 12);
    var purpleCrystal = generateRandom(1, 12);
    var redCrystal = generateRandom(1, 12);

    var score = blueCrystal + greenCrystal + purpleCrystal + redCrystal;

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

//ends the runGame function
};



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


runGame();

//displays alert when blue crystal is clicked
$("#blue").on("click", function() {

    alert("Blue");
});

//displays alert when green crystal is clicked
$("#green").on("click", function() {

    alert("Green");
});

//displays alert when purple crystal is clicked
$("#purple").on("click", function() {

    alert("Purple");
});

//displays alert when red crystal is clicked
$("#red").on("click", function() {
    
    alert("Red");

});