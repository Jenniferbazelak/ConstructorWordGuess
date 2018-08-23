var Word= require("./word.js");
// var Letter= require("./letter.js");
var inquirer = require("inquirer");

var guessesLeft= 8;
var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"];

//choose random word from words array
var randomWord = words[Math.floor(Math.random() * words.length)];

var newWordTest = new Word (randomWord);

//define functions
function displayWord(){
    var newWord = new Word (randomWord);
    
}

function askForLetter() {
   
        inquirer
            .prompt([{

                message: "Please guess a letter",
                name: "letter",
                // validate: function(value) { //make sure it is a letter
                    
            
            }])

            .then(function (answer) {
                userGuess= answer.letter.toLowerCase();
                newWordTest.addLetters();
                newWordTest.makeGuess();
                
            });
    }

    //start game
displayWord();
askForLetter();
 
 
