// 7kyu
// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// https://www.codewars.com/kata/5828713ed04efde70e000346


// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// your function should return the following object (associative array in PHP, table in COBOL):
// { C: 2, JavaScript: 1, Ruby: 1 }

// Notes:
// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// Tags: hasOwnProperty()

/**
 * Counts occurence of each language in an array of objects
 * @param {Array} list is array of objects
 * 
 * @returns object with count of each laguange
 */
function countLanguages(list) {
    let result = {};
    for (let dev of list) {
        if (!result.hasOwnProperty(dev.language)) { // If result {} does not have such key, add key/value
            result[dev.language] = 1;
        } else {
            result[dev.language]++; // otherwise, increment count which is the value
        }
    }
    return result;
}
