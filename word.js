var Letter = require("./Letter.js");

//uses wordUp var from main to generate letter spaces
function Word(wordUp) {
    this.wordUp = wordUp; //sets current word being used to that selected in main for this round
    this.theLetters = []; //makes empty array to hold letter spaces for the word in play

    this.getLetters = function () { //function place each letter in word seperately into an array
        var wordUpLetters = this.wordUp.split(''); //splits each character element within the wordUp

        for (var l = 0; l < wordUpLetters.length; l++) { //interates over each letter element in array
            var letterUp = new Letter(wordUpLetters[l]); //uses Letter.js function to determine if blank or letter character appears
            this.theLetters.push(letterUp); //updates theLetters array if letter in word is guessed; determined in Letter.js script
        };
    };

    this.theGuess = function (guess) {
        for (var g = 0; g < this.theLetters.length; g++) {
            this.theLetters[g].guessChecker(guess);
        };
    };

    this.renew = function () {
        var combine = "";
        for (var r = 0; r < this.theLetters.length; r++) {
            combine += this.theLetters[r].compareCharacter();
        };
        return combine;
    };
};

module.exports = Word;