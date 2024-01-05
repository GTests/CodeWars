// 8kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// https://www.codewars.com/kata/57faf7275c991027af000679

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

/**
 * Removes a specified number of exclamation marks ('!') from a string.
 *
 * @param {string} s - The input string from which exclamation marks will be removed.
 * @param {number} n - The number of exclamation marks to remove.
 * 
 * @returns {string} Returns a new string with up to 'n' exclamation marks removed.
 */
function remove(s, n) {
  let word = '';
  let counter = 1;
  for (let i of s) {
    if (counter <= n && i !== '!') {
      word += i;
    } else if (counter > n) {
      word += i;
    }
    if (i === '!') {
      counter++;
    }
  }
  return word;
}
