var Word= require("./word.js");
var Letter= require("./letter.js");
var inquirer = require(inquirer);


var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"]

//choose random word from words array
var randomWord = words[Math.floor(Math.random() * words.length)];

var answerBlanks = [];
for (var i = 0; i < randomWord.length; i++) {
    answerBlanks[i] = (" _ ");
}
var currentWord= answerBlanks.join(" ");

console.log(currentWord);

// //prompt user to guess a letter
function askForLetter() {
    
        inquirer
            .prompt([{

                message: "Please guess a letter",
                name: "letter",
                validate: function(value) {
                    
                  
            }
            
            }])

            .then(function (answer) {
                answer= answer.toLowerCase();
                var newLetter = new Letter(answer)
                
            });
    }
 
 
