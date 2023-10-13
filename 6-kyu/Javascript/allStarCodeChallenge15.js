// 6kyu
// All Star Code Challenge #15
// https://www.codewars.com/kata/586560a639c5ab3a260000f3/javascript

// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.
// Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array. The order matters. 
// Each element of the output array should be the rotated version of the previous element. 
// The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.

// Tags: substring(), push()

/* 
  Create an array of rotated words of the same input string
  Each time loop runs, move char at index 0 to last index
  Loop runs as many times as chars in the string
  Push rotated string into result array

  @param {string} - str is string input
  
  @return {array} - array of rotated strings
*/
function rotate(str) {
  const strLength = str.length;
  let result = [];
  for (let i = 0; i < strLength; i++) {
    // Take all chars from index 1 till the end and add char at [0] to the end
    str = str.substring(1, strLength) + str[0];
    result.push(str);
  }
  return result;
}
