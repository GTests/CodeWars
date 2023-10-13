// 8 kyu
// Simple Fun #261: Whose Move
// https://www.codewars.com/kata/59126992f9f87fd31600009b

// Task
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. 
// If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

// Input/Output
// [input] string lastPlayer/$last_player

// "black" or "white" - whose move it was during the previous round.

// [input] boolean win/$win

// true if the player who made a move during the previous round won, false otherwise.

// [output] a string

// Return "white" if white is to move on the next round, and "black" otherwise.

// Example
// For lastPlayer = "black" and win = false, the output should be "white".

// For lastPlayer = "white" and win = true, the output should be "white".


/**
 * Finds which player should make next move depending on lastPlayer win/lose
 * 
 * @param {string} lastPlayer is a string value of 'white' or 'black'
 * @param {boolean} win is a boolean value 
 * 
 * @returns a string value of which player moves next
 */
function whoseMove(lastPlayer, win) {
    const playerOne = 'white';
    const playerTwo = 'black'
    if (lastPlayer === playerOne && win == true) {
        return playerOne;
    } else if (lastPlayer === playerOne && win == false) {
        return playerTwo;
    } else if (lastPlayer === playerTwo && win == true) {
        return playerTwo;
    } else {
        return playerOne
    }
}
