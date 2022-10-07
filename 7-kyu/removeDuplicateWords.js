/*
Remove duplicate words
https://www.codewars.com/kata/5b39e3772ae7545f650000fc

DESCRIPTION:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Examples:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

function removeDuplicateWords(str) {
  let strArr = str.split(' ');
  let result = '';
  let arr = [];

  strArr.forEach((i) => {
    if (!arr.includes(i)) {
      arr.push(i);
      result += `${i} `;
    }
  });

  return result.trim();
}
