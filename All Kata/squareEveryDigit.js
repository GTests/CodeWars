/** 
Square Every Digit
https://www.codewars.com/kata/546e2562b03326a88e000020

DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// come back later and refactor
function squareDigits(num) {
  let result = '';
  if (num === 0) {
    return 0;
  } else {
    let str = num.toString();
    let charArr = str.split('');
    console.log(charArr);
    for (let i = 0; i < charArr.length; i++) {
      let char = charArr[i];
      let digit = parseInt(char);
      let numSquare = digit * digit;
      result += numSquare.toString();
    }
  }
  return parseInt(result);
}
