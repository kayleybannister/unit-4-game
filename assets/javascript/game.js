//DECLARING VARIABLES
var wins = 0;
var losses = 0;
var randomNumber = 0;
var score = 0;
var blueCrystal = generateRandom(1, 12);
var greenCrystal = generateRandom(1, 12);
var purpleCrystal = generateRandom(1, 12);
var redCrystal = generateRandom(1, 12);
//=============================================================

//creating function to generate random value for randomNumber and each crystal
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
 };

//creating runGame function to start the game each time
var runGame = function() {

    //random number variable
    randomNumber = generateRandom(19, 120);


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

    //using jQuery to display the user's score every time they click a crystal

//ends the runGame function
};

// calls the runGame function and begins the entire game
runGame();

//using jQuery to display alert when a crystal is clicked
$("#blue").on("click", function() {
    score = blueCrystal + score;
    $("#score").text(score);
});

//displays alert when green crystal is clicked
$("#green").on("click", function() {
    score = greenCrystal + score;
    $("#score").text(score);
});

//displays alert when purple crystal is clicked
$("#purple").on("click", function() {
    score = purpleCrystal + score;
    $("#score").text(score);
});

//displays alert when red crystal is clicked
$("#red").on("click", function() {
    score = redCrystal + score;
    $("#score").text(score);
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

//need to create a function that adds the value of each crystal every time it is clicked to the total score

//need to create code that restarts the game after each win or loss and continuously updates the counter for both