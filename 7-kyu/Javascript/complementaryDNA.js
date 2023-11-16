// 7kyu
// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Functions: split(), map(), join()

/**
 * Converts DNA strand by replacing each nucleotide with its complementary base.
 *
 * @param {string} str - The input DNA strand to be converted.
 * 
 * @returns {string} The converted DNA strand with complementary bases.
 */
function DNAStrandImproved(str) {
  return str
    .split('')
    .map(char => {
      switch (char.toUpperCase()) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        default:
          return char;
      }
    })
    .join('');
}

function DNAStrand(str) {
  let result = '';
  let charArr = str.split('');
  for (let i = 0; i < charArr.length; i++) {
    const char = charArr[i];
    if (char.toUpperCase() === 'A' || char === 'a') {
      result += 'T';
    } else if (char.toUpperCase() === 'T' || char === 't') {
      result += 'A';
    } else if (char.toUpperCase() === 'G' || char === 'g') {
      result += 'C';
    } else if (char.toUpperCase() === 'C' || char === 'c') {
      result += 'G';
    } else {
      result += char;
    }
  }
  return result;
}
