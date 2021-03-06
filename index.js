var Word = require("./word.js");
var inquirer = require("inquirer");

var guessesLeft = 8;
var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"];

//choose random word from words array
var randomWord = words[Math.floor(Math.random() * words.length)];

var newWordTest = new Word(randomWord);

console.log("Welcome to the Word Guess Game!");
console.log("The theme is Beach Vacation...");

var answerBlanks = [];
for (var i = 0; i < randomWord.length; i++) {
    answerBlanks[i] = (" _ ");
}
console.log(answerBlanks.join(""));

//define functions

function askForLetter(randomWord) {

    inquirer
        .prompt([{

            type: "input",
            message: "Please guess a letter. \n You have " + guessesLeft + " guesses remaining",
            name: "letter",



        }]).then(function (answer) {
            if (!randomWord.includes(answer.letter)) {
                guessesLeft--;
            }

            userGuess = answer.letter.toLowerCase();

            newWordTest.check(userGuess);
            console.log(newWordTest.displayWord());

            if (newWordTest.displayWord("") === randomWord) {
                console.log("You win!")
                reset();
            }

            else if (guessesLeft > 0) {
                askForLetter(randomWord);
            } else {
                console.log("You Lose!");
                reset();
            }



        });
}

function reset() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    newWordTest = new Word(randomWord);
    guessesLeft = 8;
    var answerBlanks = [];
    for (var i = 0; i < randomWord.length; i++) {
        answerBlanks[i] = (" _ ");
    }
    console.log(answerBlanks.join(""));
    askForLetter(randomWord);
}


//start game
askForLetter(randomWord);




