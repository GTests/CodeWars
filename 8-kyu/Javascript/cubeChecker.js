// 8kyu
// Find out whether the shape is a cube
// https://www.codewars.com/kata/58d248c7012397a81800005c

// DESCRIPTION:
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

/**
 * Checks if a given volume matches the volume of a cube with a specified side length.
 *
 * @param {number} volume - The volume to be checked.
 * @param {number} side - The side length of the cube.
 * 
 * @returns {boolean} Returns true if the volume matches the cube's volume; otherwise, returns false.
 */
var cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) {
    return false;
  } else {
    return side * side * side === volume ? true : false;
  }
};
