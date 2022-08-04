/**
Descending Order
https://www.codewars.com/kata/5467e4d82edf8bbf40000155

DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

// later use more methods and clean up code
function descendingOrder(n) {
  let result = '';
  if (n === 0 || n === 1) {
    return n;
  } else {
    let charArr = n.toString().split('');
    let numArr = charArr.map((digit) => parseInt(digit));
    numArr.sort(function (a, b) {
      return b - a;
    });
    numArr.forEach((char) => (result += char));
  }
  return parseInt(result);
}
