// 7kyu
// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

/**
 * Counts number of aeiou vowels in a given string
 * 
 * @param {string} str is the input sentence
 * 
 * @returns {number} count of the vowels
 */
function getCount(str) {
  const vowels = "aeiou";
  let vowelCount = str.split("").filter(char => vowels.includes(char));
  return vowelCount.length;
}
