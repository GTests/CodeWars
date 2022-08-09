/**
Strong Number (Special Numbers Series #2)
https://www.codewars.com/kata/5a4d303f880385399b000001/solutions/ 
 
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String

Input >> Output Examples:
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong
*/

function strong(n) {
  let number = n.toString();
  let digits = number.split('');
  let factorial = 1;
  let sum = 0;
  digits.forEach((digit) => {
    for (let i = 1; i <= parseInt(digit); i++) {
      factorial *= i;
    }
    sum += factorial;
    factorial = 1;
  });
  if (sum === n) {
    return 'STRONG!!!!';
  } else {
    return 'Not Strong !!';
  }
}

console.log(strong(145));
console.log(strong(9));
