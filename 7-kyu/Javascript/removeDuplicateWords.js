// 7kyu
// Remove duplicate words
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Examples:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

/**
 * Removes duplicate words from a given string and returns the result.
 *
 * @param {string} str - The input string containing words.
 * 
 * @returns {string} A new string with duplicate words removed.
 */
function removeDuplicateWords(str) {
  let arr = [];
  str.split(' ').forEach((i) => {
    if (!arr.includes(i)) {
      arr.push(i);
    }
  });
  return arr.join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
