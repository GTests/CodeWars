// 8kyu
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

/**
 * Checks if 2 flowers have even/odd match of petals
 * 
 * @param {number} flower1 is input number
 * @param {number} flower2 is input number
 * 
 * @returns {boolean} true/false 
 */
function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1;
}
