/*
Reversed Strings
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  let charArr = str.split('');
  let reversed = '';
  for (let i = charArr.length - 1; i >= 0; i--) {
    reversed += charArr[i];
  }
  return reversed;
}
