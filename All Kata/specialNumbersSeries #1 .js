/**
Balanced Number (Special Numbers Series #1 
https://www.codewars.com/kata/5a4e3782880385ba68000018/

DESCRIPTION:
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) 
and the sum of all digits to the right of the middle digit(s) are equal.

Notes
If the number has an odd number of digits then there is only one middle digit, 
e.g. 92645 has middle digit 6; otherwise, there are two middle digits , 
e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, 
e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .
Return the result as String

(balanced-num 7) ==> return "Balanced"
(balanced-num 295591) ==> return "Not Balanced"
*/

// Refactor entire code

// Notes for future:
// 1. turn to string, split, count length
// 2. if count is even, find middle two, sum up rest
// 3. if count is odd, find middle, sum up rest
// 4. compare and return

function balancedNum(number) {
  let num = number.toString();
  let digits = num.split('');
  let count = digits.length;
  let sumLeft = 0;
  let sumRight = 0;

  if (count === 1) {
    return 'Balanced';
  } else if (count % 2 === 0) {
    for (let i = 0; i < count / 2 - 1; i++) {
      sumLeft += parseInt(digits[i]);
    }
    for (let i = count / 2 + 1; i < count; i++) {
      sumRight += parseInt(digits[i]);
    }
  } else if (count % 2 === 1) {
    for (let i = 0; i < count / 2 - 0.5; i++) {
      sumLeft += parseInt(digits[i]);
    }
    for (let i = count / 2 + 0.5; i < count; i++) {
      sumRight += parseInt(digits[i]);
    }
  }

  if (sumLeft === sumRight) {
    return 'Balanced';
  } else {
    return 'Not Balanced';
  }
}

console.log(balancedNum(234));
console.log(balancedNum(12345678));
