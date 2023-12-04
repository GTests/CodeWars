// 8kyu
// Super Duper Easy
// https://www.codewars.com/kata/55a5bfaa756cfede78000026

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

/**
 * Calculates a value based on the input parameter.
 *
 * @param {*} x - The input value to be processed.
 * 
 * @returns {number|string} - The calculated value or an 'Error' message if the input is a string.
 */
function calculateValue(x) {
  return typeof x === 'string' ? 'Error' : x * 50 + 6;
}

function problem(x) {
  if (typeof x === 'string') {
    return 'Error';
  } else {
    return x * 50 + 6;
  }
}
