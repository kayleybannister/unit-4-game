console.log("The javascript is now running");

//variables for wins and losses
var wins = 0;
var losses = 0;

//creating the randomNumber variable so that the values can only be between 19 and 120
var randomNumber = Math.floor(Math.random() * (120-19+1) + 19);

//creating variable for each crystal value to be between 1 and 12
var crystalValue = Math.floor(Math.random() * (12 - 1) + 1);
