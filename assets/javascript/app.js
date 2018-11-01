// instructions
// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.

//next thing will be to make an array of questions
var questions = [
    {q: "What is the meaning of life?", a: "42"},
    {q: "What is your name?", a: "Arthur"},
    {q: "What is your quest?", a: "To find the holy grail"}
];

console.log(questions[1]);
//ok so I have an object that will give me questions, and they have the correct answer.  But would I give an array of answers to the user
var availAnswers = [
    {a: "42", b: "I don't know", c: "What is life", d: "What is love"},
    {a: "I don't know", b: "Arthur", c: "Insert Name Here", d: "I am Batman"}
];
console.log(availAnswers[0].a);
console.log(availAnswers[0].b);
console.log(availAnswers[0].c);
console.log(availAnswers[0].d);

//now that I have an array of questions, I want the webpage to advance the question forward

//I want the question index to start at the first question
var questionIndex = 0;
// var availAnswers = 0;

function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector(".myQuestion").innerHTML = questions[questionIndex].q;
      document.querySelector(".button1").innerHTML = availAnswers[questionIndex].a;
      document.querySelector(".button2").innerHTML = availAnswers[questionIndex].b;
      document.querySelector(".button3").innerHTML = availAnswers[questionIndex].c;
      document.querySelector(".button4").innerHTML = availAnswers[questionIndex].d;
    }
    // If there aren't, render the end game screen.
    else {
      document.querySelector(".myQuestion").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
  }

  renderQuestion();





// first thing i want to do is make sure the buttons work
//buttons
$(".button1").on("click", function(){
    console.log("button1 works");
    // next thing I want to do with these buttons is give them an assigned meaning like a, b, c, or d
    // button value should be a
    var userPress = "a";
    console.log(userPress);
});

$(".button2").on("click", function(){
    console.log("button2 works");
    // button value should be b
    var userPress = "b";
    console.log(userPress);
});

$(".button3").on("click", function(){
    console.log("button3 works");
    // button value should be c
    var userPress = "c";
    console.log(userPress);
});

$(".button4").on("click", function(){
    console.log("button4 works");
    // button value should be d
    var userPress = "d";
    console.log(userPress);
});
//BRINGO!!!
