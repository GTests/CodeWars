// 7kyu
// All Star Code Challenge #20
// https://www.codewars.com/kata/5865a75da5f19147370000c7

// Create a function called addArrays() that combines two arrays of equal length, 
// summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
// Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string

// addArrays(["a"],["b"]) // => ["ab"]

// Tags: throw new Error

/**
 * Adds values of arrays of same length at the same index
 * 
 * @param {array1} array1 is collection of string or numbers
 * @param {array1} array2 is collection of strings or values
 * 
 * @returns summed up values on same indexes or concatenated string values of same index
 */
function addArrays(array1, array2) {
  const result = [];
  if (array1.length !== array2.length) {
    throw new Error;
  } else if (array1.length === 0) {
    return result;
  }
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result
}
