/*
Exes and Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a

DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false 
*/

function XO(str) {
  let charArr = str.split('');
  let xCount = 0,
    oCount = 0;

  charArr.forEach((char) => {
    if (char.toLowerCase() === 'o') {
      oCount++;
    } else if (char.toLowerCase() === 'x') {
      xCount++;
    }
  });

  return oCount === xCount;
}
