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

//randomNumber variable - will need to create a function so that the values can only be between 19 and 120
var randomNumber = Math.floor(Math.random() * (120-19+1) + 19);

//value of each crystal - will need function for value to be between 1 and 12
var crystalValue = 0;
