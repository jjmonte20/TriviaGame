// instructions
// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.




// first thing i want to do is make sure the buttons work
//buttons
$(".button1").on("click", function(){
    console.log("button1 works");
});

$(".button2").on("click", function(){
    console.log("button2 works");
});

$(".button3").on("click", function(){
    console.log("button3 works");
});

$(".button4").on("click", function(){
    console.log("button4 works");
});
//BRINGO!!!


//next thing will be to make an array of questions
var questions = [
    {q: "What is the meaning of life?",a: "42"},
    {q: "What is your name?", a: "Arthur"},
    {q: "What is your quest?", a: "To find the holy grail"}
];