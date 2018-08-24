

var Letter = require("./letter.js")

var Word = function(randomWord){
    this.randomWord = randomWord.split("");
    this.letters = [];
    this.guessesLeft= 8;

    this.addLetters = function (){
        this.letters = [];
        for (var i=0; i<this.randomWord.length; i++){
        var newLetter = new Letter(randomWord[i]);
            this.letters.push(newLetter);
        }
    }

    this.displayWord = function(){
        letterArr = []
        for (var i = 0; i< this.letters.length; i++){
            letterArr.push(this.letters[i].ifGuessed())
        }
       
        return letterArr.join("");
    }
    
    this.check = function(userGuess){
        for (var i = 0; i< this.letters.length; i++){
            this.letters[i].checkGuess(userGuess)
        }
    }

    this.addLetters();
}

module.exports = Word;