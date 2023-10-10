// 7kyu
// All Star Code Challenge #16
https://www.codewars.com/kata/586566b773bd9cbe2b000013

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

// noRepeat("aabbccdde") // => "e"
// noRepeat("wxyz") // => "w"
// noRepeat("testing") // => "e"
// Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

/**
 * Find first occurence of letter that does not repeat
 * @param {string} str is a given string with duplicate letters
 * 
 * @returns a first occurence of letter which is unique
 */
function noRepeat(str) {
    for (let letter of str) {
        const firstOccurence = str.indexOf(letter);
        const lastOccurence = str.lastIndexOf(letter);
        if (firstOccurence === lastOccurence) {
            return letter;
        }
    }
}
