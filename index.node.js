var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + ",", "test your cricket knowledge");


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score++
  }else{
    console.log("You are wrong!")
    score--
  }

  console.log("Current score: ", score)
  console.log("_________________")
}

play("Q1 - Virat kholi's Jersey Number? ","18")
play("Q2 - who is the rank-1 holder in men's test? ","Marnus Labuschagne")
play("Q3 - Current ranking of Virat kholi in Men's test? ","7")
play("Q4 - How many times Sachin Tendulkar scored 100s in test? ","51")
play("Q5 - Highest scored by Rohit sharma in ODI? ","264" )

console.log("GREAT! You SCORED:", score)