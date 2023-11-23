// 7kyu
// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Functions: map(), sort()

/**
 * Finds the highest and lowest numbers in a space-separated string of numbers.
 *
 * @param {string} numbers - A string containing space-separated numbers.
 * 
 * @returns {string} A string containing the highest and lowest numbers separated by a space.
 */
function highAndLow(numbers) {
  const numArr = numbers.split(' ').map(Number);
  numArr.sort((a, b) => a - b);
  const highest = numArr[numArr.length - 1];
  const lowest = numArr[0];
  return `${highest} ${lowest}`;
}

function highAndLow(numbers) {
  let charArr = numbers.split(' ');
  let numArr = charArr.map((char) => parseInt(char));
  numArr.sort(function (a, b) {
    return a - b;
  });
  return `${numArr[numArr.length - 1]} ${numArr[0]}`;
}
