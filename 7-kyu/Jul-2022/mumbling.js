/**
Mumbling
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(word) {
  let result = '';
  const start = word[0].toUpperCase();
  let charArr = word.split('');

  for (let i = 0; i < charArr.length; i++) {
    const char = charArr[i];
    let charIndex = i;
    for (let j = 0; j < charIndex; j++) {
      if (j === 0) {
        result += char.toUpperCase();
      }
      result += char.toLowerCase();
    }
    result += '-';
  }
  return (result = start.concat(result.slice(0, result.length - 1)));
}
