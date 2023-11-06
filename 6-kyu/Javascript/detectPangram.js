// 6kyu
// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Functions: slice(), includes(), indexOf()

/**
 * Detects if the given word is pangram
 * Conditions counts matches and removes 
 * seen char from alphabet to avoid duplicates
 * 
 * @param {string} str is the input word
 * 
 * @returns {boolean} true/false if word is pangram
 */
function isPangram(str) {
    let a = 'qwertyuiopasdfghjklzxcvbnm';
    let counter = 0;
    for (char of str) {
        char = char.toLowerCase();
        if (a.includes(char)) {
            counter++;
            a = a.slice(0, a.indexOf(char)) + a.slice(a.indexOf(char) + 1);
        }
    }
    return counter >= 26 ? true : false;
}

/**
 * Smarter example found in solutions on codewars
 * indexOf will return -1 when there is no such char
 * Also no need for counter variable since i < 26
 */
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++) {
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    }
    return true;
}
