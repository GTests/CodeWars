// 7kyu
// Unique Sum
// https://www.codewars.com/kata/56b1eb19247c01493a000065

// DESCRIPTION:
// Given a list of integers values, your job is to return the sum of the values; however, 
// if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:
// [ 1, 2, 3] ==> 6
// [ 1, 3, 8, 1, 8] ==> 12
// [ -1, -1, 5, 2, -7] ==> -1
// [] ==> null

/**
 * Calculates the sum of unique values in an array.
 *
 * @param {Array} list - The input array.
 * 
 * @returns {number | null} Returns the sum of unique values or null if the array is empty.
 */
function uniqueSum(list) {
  if (list.length === 0) return null;
  let unique = [];
  for (let num of list) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique.reduce((total, value) => total + value, 0);
}
