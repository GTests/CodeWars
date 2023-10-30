// 8 kyu
// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example:

//   [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined


// Tags: reduce()

/**
 * Finds the count of the sheep in an array
 * 
 * @param {array} arrayOfSheep is an array of values
 * 
 * @returns count of true in an array
 */
function countSheeps(arrayOfSheep) {
  let result = arrayOfSheep.reduce((total, sheep) => {
    if (sheep === true) {
      return total + 1;
    }
    return total;
  }, 0);
  return result;
}
