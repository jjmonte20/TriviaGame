// instructions
// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.

//next thing will be to make an array of questions
var questions = [
    {q: "What game console was the original Super Smash Brothers on?", a: "Nintendo 64"},
    {q: "What is the greatest selling video game console of all time?", a: "Playstation 2"},
    {q: "Which popular fighting game title ushered the creation of the ESRB ratings system for its violent content?", a: "Mortal Kombat"},
    {q: "Which now popular RPG series started as a 'final' attempt by their game studio to compete in the game industry?", a: "Final Fantasy"},
    {q: "What video game console was the last to be produced by popular game company SEGA?", a: "Dreamcast"},
    {q: "What major software company converted their gaming division into the hardware platform for Xbox", a: "Microsoft"},
    {q: "Which of these popular gaming characters is often considered the 'Mascot' of videogames?", a: "Mario"},
    {q: "When was the original Nintendo Entertainment System released in North America", a: "1983"},
    {q: "Which popular video game character is currently not a playable character in the Super Smash Brothers series", a: "Waluigi"},
    {q: "The introduction of which popular game console was considered the beginning of the sale competiton known as 'The Console Wars'?", a: "Sega Genesis"}
];

console.log(questions);
//ok so I have an object that will give me questions, and they have the correct answer.  But would I give an array of answers to the user
var availAnswers = [
    {a: "Nintendo 64", b: "Sony Playstation", c: "Super Nintendo", d: "Atari 2600"},
    {a: "Nintendo Wii U", b: "Nintendo Wii", c: "Playstation 2", d: "Nintendo DS"},
    {a: "Street Fighter 2", b: "Mortal Kombat", c: "King of Fighters 97", d: "Super Smash Brothers Melee"},
    {a: "Final Fantasy", b: "The Legend of Zelda", c: "Chrono Trigger", d: "Shin Megami Tensei"},
    {a: "Genesis", b: "Neptune", c: "Saturn", d: "Dreamcast"},
    {a: "Sony", b: "Facebook", c: "Apple", d: "Microsoft"},
    {a: "Sonic the Hedgehog", b: "Master Chief", c: "Mario", d: "Pacman"},
    {a: "1985", b: "1983", c: "2018", d: "2000"},
    {a: "Waluigi", b: "Snake", c: "Mega Man", d: "Bayonetta"},
    {a: "Microsoft Xbox", b: "Sony Playstation", c: "Sega Genesis", d: "Nintendo Entertainment System"}
];
console.log(availAnswers[0].a);
console.log(availAnswers[0].b);
console.log(availAnswers[0].c);
console.log(availAnswers[0].d);

// now I want to have a score
var score = 0;

//time displays, need to set a variable for the interval
var time = 119;

// need a function that resets the game
// function reset() {
//   $(".time").text("00:59");
//   score = 0;
//   questionIndex = 0;
//   renderQuestion();
//   start();
// }
// start function

$(document).ready(function(){

function start() {
  intervalId = setInterval(count, 1000);
}

// stop function
function stop() {
  clearInterval(intervalId);
}

// count function
function count() {
  time--;
  var converted = timeConverter(time);
  $(".time").text(converted);

  if (time == 0) {
    stop();
    console.log(time);
    //placing end game conditions here allow the game to end with a timeout or the questions running out
    document.querySelector(".myQuestion").innerHTML = "Game Over!";
      $(".myScore").append("<h3 class='score'>" + score + "</h3>");
      $(".button1").remove();
      $(".button2").remove();
      $(".button3").remove();
      $(".button4").remove();
      $(".button5holder").html("<button type='button' class='btn btn-light button5'>" + "Reset" + "</button>");
      document.querySelector(".score").innerHTML = "You got: " + score + " out of " + questions.length + " questions correct.";

  }
}

// convert the time to minutes and seconds
function timeConverter(t) {

  var minutes = Math.floor(t/60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
//need to tell the clock not to run automatically


//need a function to start the clock


//now that I have an array of questions, I want the webpage to advance the question forward

//I want the question index to start at the first question
var questionIndex = 0;
//do not need an "answerIndex" because question index's value is only a number that is meant to advance upwards

// start the clock here
start();


function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector(".myQuestion").innerHTML = questions[questionIndex].q;
    //   document.querySelector(".button1").innerHTML = availAnswers[questionIndex].a;
    //   document.querySelector(".button2").innerHTML = availAnswers[questionIndex].b;
    //   document.querySelector(".button3").innerHTML = availAnswers[questionIndex].c;
    //   document.querySelector(".button4").innerHTML = availAnswers[questionIndex].d;

        // ^^ these work, but now I want them to generate the button and filler rather than always appear
      $(".button1holder").html("<button type='button' class='btn btn-light button1'>" + availAnswers[questionIndex].a + "</button>");
      $(".button2holder").html("<button type='button' class='btn btn-light button2'>" + availAnswers[questionIndex].b + "</button>");
      $(".button3holder").html("<button type='button' class='btn btn-light button3'>" + availAnswers[questionIndex].c + "</button>");
      $(".button4holder").html("<button type='button' class='btn btn-light button4'>" + availAnswers[questionIndex].d + "</button>");

      
      

      function game() {
      $(".btn").on("click",function(){
        console.log($(this).text())
        console.log(availAnswers[questionIndex].a);
        if(questions[questionIndex].a !== $(this).text()){
        console.log("wrong");
        questionIndex++;
        renderQuestion();
        } else {
        console.log("correct");
        questionIndex++;
        score++;
        renderQuestion();
        }})

        }
        game();
    }

    // If there aren't, render the end game screen.
    else {
      document.querySelector(".myQuestion").innerHTML = "Game Over!";
      $(".myScore").append("<h3 class='score'>" + score + "</h3>");
      $(".button1").remove();
      $(".button2").remove();
      $(".button3").remove();
      $(".button4").remove();
      $(".button5holder").html("<button type='button' class='btn btn-light button5'>" + "Reset" + "</button>");
      document.querySelector(".score").innerHTML = "You got: " + score + " out of " + questions.length + " questions correct.";
      stop();
      
    }
    
    
    
    
  }
  renderQuestion();
});

//   renderQuestion();
// need to make a function to reset the game
// function resetButton() {
  // $(".button5").on("click", function() {
  //  reset();
  // })
// }




// first thing i want to do is make sure the buttons work

//buttons
// function game() {
// $(".btn").on("click",function(){
//     console.log($(this).text())
//     console.log(availAnswers[questionIndex].a);

//     if(questions[questionIndex].a !== $(this).text()){
//         console.log("wrong");
//         questionIndex++;
//         renderQuestion();
//     } else {
//         console.log("correct");
//         questionIndex++;
//         score++;
//         renderQuestion();
//     }
// })

// ^^ this is functioning as a better version of writing out the entire thing as such vv

// $(".button1").on("click", function(){
//     console.log("button1 works");
//     // next thing I want to do with these buttons is give them an assigned meaning like a, b, c, or d
//     // button value should be a
//     userPress = availAnswers[questionIndex].a;
//     userPressed = true;   
//     console.log(userPress);
// });

// $(".button2").on("click", function(){
//     console.log("button2 works");
//     // button value should be b
//     userPress = availAnswers[questionIndex].b;
//     console.log(userPress);
// });

// $(".button3").on("click", function(){
//     console.log("button3 works");
//     // button value should be c
//     userPress = availAnswers[questionIndex].c;
//     console.log(userPress);
// });

// $(".button4").on("click", function(){
//     console.log("button4 works");
//     // button value should be d
//     userPress = availAnswers[questionIndex].d;
//     console.log(userPress);
// });
// //BRINGO!!!

//     //need this to stop the function
//     if (questionIndex === questions.length) {
//     return;
//     }
    //     if (userPressed == true) {
    //     //here is the logic for the game, the if the user is right or the user is wrong
    //         if (userPress !== questions[questionIndex].a) {
    //         alert("incorrect");
    //         } else {
    //         alert("correct");
    //         }
    // }
    // }

    // game();