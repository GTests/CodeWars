// 6kyu
// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
// https://www.codewars.com/kata/583d972b8bbc0402cf000121

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];

// write a function that adds the question property to each object in the input array where the developer has not provided the relevant details 
// (marked with a null value in JavaScript, with the default value in COBOL). 
// The value of the question property should be the following string:
// Hi, could you please provide your <property name>.

// and returns only the developers with missing details:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
//   question: 'Hi, could you please provide your language.' }
// ]

// Notes:
// At most only one of the values will be null / empty.
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with missing details.
// The input array will always be valid and formatted as in the example above.

// Tags: Object.keys(), find(), undefined

/**
 * Adds addiotnal key/value pair to each object if null value was found
 * Uses key name of the null value when adding a new pair of key/values
 * 
 * @param {array} list is an array of objects
 * 
 * @returns an array of objects with certain requirement to solve the challenge
 */
function askForMissingDetails(list) {
  const result = [];
  list.forEach((dev) => {
    // for each object, get all keys and iterate them using find() to locate key with value null
    let value = Object.keys(dev).find((key) => dev[key] === null);
    if (value !== undefined) { // find() above can return undefined if no match found
      dev['question'] = `Hi, could you please provide your ${value}.`
      result.push(dev); // after adding required key/value pair, push it into results array
    }
  });
  return result
}
