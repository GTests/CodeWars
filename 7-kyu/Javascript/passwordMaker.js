// 7kyu
// Password Maker
// https://www.codewars.com/kata/5637b03c6be7e01d99000046

// DESCRIPTION:
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and 
// make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers 
// (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.

// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

// Tags: slice()

/**
 * Convert given string into alphanumerical password
 * 
 * @param {string} phrase is the input string
 * 
 * @returns password with modified values
 */
function makePassword(phrase) {
  let password = '';
  let wordArr = phrase.split(' ');
  for (let word of wordArr) {
    const char = word.slice(0, 1).toLowerCase(); //First char of every word
    if (char === 'i') {
      password += '1';
    } else if (char === 'o') {
      password += '0';
    } else if (char === 's') {
      password += '5';
    } else {
      password += word.slice(0, 1);
    }
  }
  return password;
}
