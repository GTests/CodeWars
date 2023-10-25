// 7kyu
// Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

/**
 * Reverses given string without special characters, digits or symbols
 * 
 * @param {string} str is a string input
 * 
 * @returns reversed string without any non-string chars
 */
function reverseLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (alphabet.includes(char.toLowerCase())) {
            result += char;
        }
    }
    return result;
}
