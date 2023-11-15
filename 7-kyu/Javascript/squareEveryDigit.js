// 7kyu 
// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9*9 is 81 and 1*1 is 1.

// Note: The function accepts an integer and returns an integer

// Functions: map(), join(), toString(), parseInt()

/**
 * Squares each digit of a given number and returns the result.
 *
 * @param {number} num - The input number.
 * 
 * @returns {number} The number formed by squaring each digit of the input number.
 */
function squareDigits(num) {
  if (num === 0) {
    return 0;
  }

  // Convert the number to a string, split it into an array of characters,
  // square each digit, and join the results into a single string
  const result = num
    .toString()
    .split('')
    .map(char => parseInt(char) ** 2)
    .join('');

  return parseInt(result);
}
