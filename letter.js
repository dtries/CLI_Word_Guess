function Letter(letter) { //main function to determine if entered letter character is contained in the word and sets correct guess to true if so
    this.letter = letter.toUpperCase(); //changes entry to upper case
    this.isCorrect = false; //sets correct letter choice to false as default

    this.compareCharacter = function () { // specific function to determine whether letter charcter is in the word
        if (this.isCorrect) { //if this.isCorrect is true do next line
            return this.letter; //stops further eval and returns the letter character for use in Word.js
        } else {
            return "_ "; //if letter is not a correct guess a blank is returned for use in Word.js
        };
    };

    this.guessChecker = function (guess) { //specific function to set isCorrect value based on the letter character guessed, used in Word.js
        if (this.letter.toLowerCase() == guess.toLowerCase()) { //changes letter characters to all lower case to ensure like comparison and compare whether guess and a letter in the word match

            this.isCorrect = true; //sets isCorrect to true if the guess and a letter in word match, default already set to false
        };
    };
}

module.exports = Letter;