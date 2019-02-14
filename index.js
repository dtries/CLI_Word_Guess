//---- required export files or NPM files
var Word = require("./Word.js"); //needs word.js script
var colors = require('colors'); //npm module to allow for different colors in console
var inquirer = require('inquirer'); //npm module that allows for command line entry prompts


//---- game test variable DELETE WHEN WORKING
// var guess = "a";
//---- base game variables
var chancesLeft = 6;
var alreadyGuessed = [];

var words = ['lion', 'tiger', 'dog', 'bat', 'kangaroo', 'koala', 'wombat', 'chimpanzee', 'gorilla', 'monkey', 'lemur', 'squirrel', 'mouse', 'porcupine', 'whale', 'dolphin', 'seal', 'walrus', 'human', 'deer', 'bear', 'ocelot', 'beaver', 'sloth', 'bison', 'wildebeest', 'otter', 'meerkat', 'elephant', 'hippopotamus', 'llama', 'moose', 'dingo', 'rhinoceros', 'hedgehog', 'gibbon', 'giraffe', 'raccoon', 'cheetah', 'caribou', 'opossum', 'ferret', 'baboon', 'manatee', 'narwhal', 'orangutan']; //word array for the game

var wordUp = new Word(words[Math.floor(Math.random() * words.length)]); //choose a random word based on the array position determined from a random number generator

wordUp.getLetters(); //this is a function in the Word.js file to set up blank letter place holders at beginning of game; also places a corrected guess in the proper spot during game play

console.log("\nLet's Play a Word Guess Game".rainbow); //Opening message to user
console.log("  The Category is Mammals.".magenta.bgYellow + "\n"); //Category clue


//----- the primary function that controls game play
function gameController() {
    inquirer.prompt([ //display current stats and ask for letter selection
        {
            //type code for current stats here

            type: "input",
            prefix: " ", //eliminates any default console characters before the message (e.g. "?")
            name: "guess",
            message: "What Mammal is this? " + colors.blue(wordUp.renew()) +
                "\n\nChances Left: " + colors.yellow(chancesLeft) + "\nLetters Already Selected: " + colors.green(alreadyGuessed.join(" ")) +
                "\nChoose a letter:"
        }
    ]).then(function (input) { //takes user selected letter, checks input, and if acceptable flows through game logic

        //-- checks if user input is acceptable, can't use switch case because of need to check input length
        if (input.guess === "") { // when entry is blank show message and call game controller again
            console.log("\nUmmm...You need to enter a letter.\n".red);
            return gameController();
        } else if (input.guess.length > 1) { // when entry contains more than one character show message and call game controller again
            console.log("\nHmmm...Enter only one letter at a time.\n".red);
            return gameController();
        } else if (alreadyGuessed.includes(input.guess)) { //determines if current input letter has been guessed previously by checking to see if it is already included in the alreadyGuessed array
            console.log("\nAhem...You already guessed that letter, try another.\n".red);
            return gameController();
        } else if (!/^[a-zA-Z]+$/.test(input.guess)) { //only allows letter input
            console.log("\nHold up...the word only contains letters, so this time pick a letter.\n".red);
            return gameController();
        }




        if (!wordUp.wordUp.includes(input.guess)) { //Checks to see if the wordUp array does not include the letter guessed, if the letter fails to appear in the word the chances left to guess correct letters goes down by 
            console.log("\n" + " That letter is not in the word :o ".bgRed.black + "\n");
            chancesLeft--;
        } else {
            console.log("\n" + " Correct! Great Guess!".bgGreen.black + "\n");

        };

        alreadyGuessed.push(input.guess); //appends letter guessed to the already guessed letter array

        for (var c = 0; c < wordUp.theLetters.length; c++) {
            wordUp.theLetters[c].guessChecker(input.guess);
        };

        if (wordUp.renew().toLowerCase() == wordUp.wordUp.toLowerCase()) {
            gameOver("winner");
            return;
        };

        if (chancesLeft == 0) {
            gameOver("loser");
            return;
        };
        gameController();
    });
};

gameController();

function gameOver(status) {
    switch (status) {
        case "winner":
            console.log("\nWinner Winner Chicken Dinner!".green + "\n");
            console.log("You got " + wordUp.wordUp + " with " + chancesLeft + " chances left!\n");
            break;


        case "loser":
            console.log("\nYeah, You Lost...Better Luck Next Time!".red);
            console.log("\nThe Mammal Type was " + wordUp.wordUp + ".\n");
            break;
    };

    //--- Prepares for play again
    wordUp = new Word(words[Math.floor(Math.random() * words.length)]); //grabs new word
    wordUp.getLetters(); //determines letters/spaces for new word
    chancesLeft = 6; //resets guesses remaining
    alreadyGuessed = []; //clears letters guessed array

    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "How about another round?"
    }]).then(function (answer) {
        if (answer.confirm) { //if answer is yes
            console.log("\nAlright! See if you can guess this next mammal...".green + "\n");
            gameController();
        } else {
            console.log("\n" + "Okay, perhaps try again later. Bye!".bgYellow.black);
        }
    });
};