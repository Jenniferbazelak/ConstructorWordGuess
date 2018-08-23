// o	An array of new Letter objects representing the letters of the underlying word
// o	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// o	A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



var Letter = require("./letter.js")

var Word = function(randomWord){
    this.randomWord = randomWord.split("");
    this.letters = [];
    this.addLetters = function (){
        for (var i=0; i<this.randomWord.length; i++){
        var newLetter = new Letter(randomWord[i]);
            this.letters.push(newLetter);
        }
    }

    this.makeGuess = function(){
        console.log("makeguess")
        for (var i = 0; i< this.letters.length; i++){
            this.letters[i].ifGuessed()
        }
        console.log(this.letters)
       
    }
    this.check = function(userGuess){
        for (var i = 0; i< this.letters.length; i++){
            this.letters[i].checkGuess(userGuess)
        }
    }
}

module.exports = Word;