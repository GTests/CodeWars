// 7kyu
// The highest profit wins!
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// Task:
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. 
// Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Tags: sort()

/**
 * Sorts the array and finds min/max numbers
 * 
 * @param {array} arr is input array of numbers
 * 
 * @returns array of min/max numbers
 */
function minMax(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[0];
    let max = arr[arr.length - 1];
    return [min, max];
}
