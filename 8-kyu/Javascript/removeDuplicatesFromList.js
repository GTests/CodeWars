// 8 kyu
// Remove duplicates from list
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


/**
 * Returns an array containing distinct elements from the input array.
 *
 * @param {array} a - The input array from which to extract distinct elements.
 * 
 * @returns {array} An array containing only the distinct elements from the input array.
 */
function distinct(a) {
    let seen = [];
    a.forEach(number => {
        if (!seen.includes(number)) {
            seen.push(number);
        }
    });
    return seen;
}
