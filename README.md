# CLI_Word_Guess

## Individual Project 9 (CLI Word Guess Game) 

The assignment was to implement Node JS to create a word guess game, similar in concept to hangman, but tracking guesses left instead of adding to a hangman figure for an incorrect guess. The CLI Word Guess app uses the command line and node.js package to accept player input in the form of:

* *keyboard characters for guessing letters in the word*

* *Y or y for "yes" and N or n for "no" when player is asked if they would like to play again*

## Narrated Video Demonstration
[YouTube]
 
## Getting Started
1. Clone [repo]https://github.com/dtries/CLI_Word_Guess to your machine. 
1. Enter 'npm install' in GitBash or your terminal.
   * This will install the proper js package files from a package JSON file.
1. Enter 'node index.js' to begin game. 
1. Enter a guess using the keyboard and press Enter key.
   * Possible results:
     1. Letter is in word to be guessed and had not been selected already.
          * Blanks in the word matching the letter guessed are updated with that letter.
          * Letter is added to the Letters Already Selected display on the screen.
          
     1. Letter is not in word and has not been selected already. 
          * Letter is added to the Letters Already Selected display on the screen.
          * Chances Left display for how many guesss remain is reduced by 1.
          
     1. Letter has already been selected.
          * Displays message stating that the letter had been selected previously.
          * Chances Left display remains unchanged.
          
     1. Letter entry is left blank.
          * Displays message stating that a letter entry is required.
          * Chances Left display remains unchanged.
          
     1. Letter entry contains more than one letter.
          * Displays message stating that only single letter entry is accepted.
          * Chances Left display remains unchanged.
          
     1. Keyboard entry is a character that is not a letter.
          * Displays message stating that only letter entry is accepted.
          * Chances Left display remains unchanged.
          
  1. If word is guessed correctly or the chances left run out:
    * Winner or Loser message is displayed along with the entire word that was to be guessed.
    * Player is asked if they would like to play again.
      *If yes, game resets and a new word is selected at random.
      *If no, game exits back to default command line.
                     
## Tech Employed
* Node.js - (see below)
* Inquirer.js NPM Package - https://www.npmjs.com/package/axios
* Colors NPM Package - https://www.npmjs.com/package/spotify  (To access the SPOTIFY API)

## Prerequisites
* Node.js - The latest version of Node is available at: https://nodejs.org/en/

## Built With
VS Code - Text Editor
## Authored and Maintained By:
Dennis Ries

Contact: dtries@gmail.com

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
