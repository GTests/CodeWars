// 7kyu
// Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// DESCRIPTION:
// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Functions: forEach()

/**
 * Creates array of indexes of each uppercase character
 * 
 * @param {string} word is the input string
 * 
 * @returns {array} of uppercase char indexes
 */
var capitals = function (word) {
  let result = [];
  word.split('').forEach((char, i) => {
    if (char === char.toUpperCase()) {
      result.push(i);
    }
  });
  return result;
};

/**
 * Second version of previous function
 * 
 * @param {string} word is the input string
 * 
 * @returns {array} of uppercase char indexes
 */
var capitals2 = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};
