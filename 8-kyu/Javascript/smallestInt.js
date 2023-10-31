// 8kyu
// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Tags: sort()

/**
 * Finds smallest number in the array 
 * 
 * @param {array} args is an array of numbers
 * 
 * @returns smallest number in the given array
 */
function findSmallestInt(args) {
  let minNum = args[0];
  args.forEach((value) => {
    if (value < minNum) {
      minNum = value;
    }
  });
  return minNum;
}

/**
 * Finds smallest number in the array 
 * 
 * @param {array} args is an array of numbers
 * 
 * @returns smallest number in the given array
 */
function findSmallestNumber(args) {
  args.sort((a, b) => a - b);
  return args[0];
}
