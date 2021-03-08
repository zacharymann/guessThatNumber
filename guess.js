// GUESS THAT NUMBER
// Text/message to be used throughout file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number to be guessed
let randomNum;
// For storing the number of attempts left
let attempts;
// For storing the user's guess
let guess;
// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has a value of true
while (restartGame){
  // Asks user to enter a number to set the upper bound for the random number that will be created
  rangeNum = parseInt(prompt(`Please enter a maximum number for the range:`));

  // Verifies the user's entry for a range number is a number greater than zero (NOTE: All numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false. Also, NaN has a default boolean value of false as well.)
  while (!rangeNum || rangeNum < 1){
    rangeNum = parseInt(prompt(enterNumText));
  }

  // Creates the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  // Verifies the user's entry for a number of attempts allowed is a number greater than zero
  while (!attempts || attempts < 1){
    attempts = parseInt(prompt(enterNumText));
  }

  // Asks user to enter a guess in the range that they set
  guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`);
  
  // Continues looping until the user guesses the correct number or runs out of attempts (Loops until a BREAK keyword is run)
  while (true){
    // Displays the number/answer when a code word is entered
    if (guess === `Mellon`){
      alert(`The number is ${randomNum}`);
      guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`)
    }

    // Tries to convert the user's guess into a number
    guess = parseInt(guess);

    // Verifies the user's guess is a number, a number greater than zero, and within the range they set
    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if the user guessed correctly. If so, the game ends.
    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;
      // Checks if user has any attempts left. If not, then the game ends.
    } else if (attempts === 0){
      alert(`Sorry, but have you run out of attempts :(
The number was ${randomNum}`);
      break;
      // Checks if user's guess was too low and prompts user to guess again if so
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);
      // Checks if user's guess was too high and prompts user to guess again if so
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }
  }

  // Prompts user with option to play again
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  // Loop continues until user submits a valid response
  while (true){
    // Checks if the user's anser is no (AKA "N" or "n")
    if (playAgain.toUpperCase() === "N"){
      // Alerts the user that the game is over and game does not restart
      alert(`Thanks for playing!`);
      restartGame = false;
      break;
    } else if (playAgain.toUpperCase()=== "Y"){
      break;
      // Prompts the user to enter a valid response and starts the loop again
    } else {
      playAgain = prompt(`Please enter Y or N:`)
    }
  }
}