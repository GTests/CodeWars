/*
Complete Fibonacci Series
https://www.codewars.com/kata/5239f06d20eeab9deb00049b

The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []

*/

function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(num1);
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return result;
}
