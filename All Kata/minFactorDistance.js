/**
DESCRIPTION:
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:
13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
 */

function minDistance(n) {
  // find all factors
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  // Initial min length
  let minLength = factors[1] - factors[0];

  // Compare all other lengths to min.
  for (let i = 1; i < factors.length + 1; i++) {
    let length = factors[i + 1] - factors[i];
    if (length < minLength) {
      minLength = length;
    }
  }
  return minLength;
}
