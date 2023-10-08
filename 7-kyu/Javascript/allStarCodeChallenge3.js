// 7kyu
// All Star Code Challenge #3
// https://www.codewars.com/kata/58640340b3a675d9a70000b9

// Create a function that takes a string argument and returns that same string with all vowels removed 
// (vowels are "a", "e", "i", "o", "u")

// Example (Input --> Output)

// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""

// Tags: join(), filter(), includes()

/*
  Removes vowels from the given string
  Splits string into characters
  Filters based on conditoin for vowels
  joins characters without spaces
  
  @param {string} - str is input string value
  
  @return {string} value that matches kata requirement
*/
var removeVowels = function (str) {
    const vowels = 'aeiou';
    const charArray = str.split("").filter((char) => !vowels.includes(char.toLowerCase()));
    return charArray.join('');
}
