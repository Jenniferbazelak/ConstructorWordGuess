// o	An array of new Letter objects representing the letters of the underlying word
// o	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// o	A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



var Letter = require("./letter.js")

var Word = function(randomWord){
    this.randomWord = randomWord.split("");
    this.letters = [];
    this.addLetters = function (){
        this.letters.push( new Letter (randomword[i]))
    }


    this.addWord = function(){
        this.word.push(new Letter());
}}

module.exports = Word;