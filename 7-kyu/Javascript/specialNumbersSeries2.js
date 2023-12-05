// 7kyu
// Strong Number (Special Numbers Series #2)
// https://www.codewars.com/kata/5a4d303f880385399b000001

// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String

// Input >> Output Examples:
// strong_num(1) ==> return "STRONG!!!!"
// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

// strong_num(123) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong

/**
 * Determines if a number is a "Strong" number
 *
 * @param {number} n - The input number to be checked.
 * 
 * @returns {string} - Returns 'STRONG!!!!' if the number is strong, 'Not Strong !!' otherwise.
 */
function strong(n) {
  // Calculate the sum of factorials for each digit using the reduce method.
  const sumOfFactorials = String(n)
    .split('')
    .reduce((sum, digit) => sum + factorial(parseInt(digit)), 0);
  return sumOfFactorials === n ? 'STRONG!!!!' : 'Not Strong !!';
}

/**
 * Calculates the factorial of a given number.
 *
 * @param {number} num - The number for which the factorial is calculated.
 * 
 * @returns {number} - The factorial of the input number.
 */
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

/**
 * My previous solution
 */
function strong(n) {
  let number = n.toString();
  let digits = number.split('');
  let factorial = 1;
  let sum = 0;
  digits.forEach((digit) => {
    for (let i = 1; i <= parseInt(digit); i++) {
      factorial *= i;
    }
    sum += factorial;
    factorial = 1;
  });
  if (sum === n) {
    return 'STRONG!!!!';
  } else {
    return 'Not Strong !!';
  }
}
