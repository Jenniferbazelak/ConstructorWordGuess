

var Letter = function (character) {
    this.character = character.toLowerCase();
    this.beenGuessed = false;
    this.guessesLeft = 8;
    this.ifGuessed = function () {
        if (this.beenGuessed) {
            return this.character
        } else {
            return (" _ ")
        }
    }
    this.checkGuess = function (userGuess) {
        if (userGuess === this.character) {
            this.beenGuessed = true;

        }

    }
};

module.exports = Letter;