// 7kyu
// All Star Code Challenge #31
// https://www.codewars.com/kata/5866f10311ceec6ac10001e8

// Walter has a doctor's appointment and has to leave Jesse in charge of preparing their next "cook". 
// He left Jesse an array of Instruction objects, which contain solutions, amounts, and the appropriate scientific instrument to use for each step in the "cook". 
// The order of the instructions must be carried out in the EXACT order they're given. However, Jesse doesn't understand JavaScript and just needs things simplified!

// Create a function called helpJesse() that accepts an array of Instruction objects as an argument. 
// The function should convert each object into a string of the following format:

// "Pour {amount} mL of {solution} into a {instrument}"

// It should return an array of each object-to-string conversion, in the same order given.

// Walter may leave an optional "note" in the Instruction object, which should be included at the end of the string in parentheses, like so:

// "Pour {amount} mL of {solution} into a {instrument} ({note})"

// function Instruction(amount, solution, instrument, note){
//   this.amount=amount;
//   this.solution=solution;
//   this.instrument=instrument;
//   if (note){
//     this.note = note;
//   }
// }

// var recipe = [
//   new Instruction(5,"Sodium Chloride","Graduated Cylinder"),
//   new Instruction(250,"Hydrochloric Acid","Boiling Flask"),
//   new Instruction(100,"Water","Erlenmeyer Flask", "Do NOT mess this step up, Jesse!")];

// helpJesse(recipe);
// // ["Pour 5 mL of Sodium Chloride into a Graduated Cylinder",
// // "Pour 250 mL of Hydrochloric Acid into a Boiling Flask",
// // "Pour 100 mL of Water into a Erlenmeyer Flask (Do NOT mess this step up, Jesse!)"]

// Note:
// Assume all keys in the Instruction objects are properly filled and do not need to be checked for format or value type.

//Functions: hasOwnProperty(), push();

/**
 * Creates array of string with set of instructions from input array
 * 
 * @param {array} - array is collection of objects with instruction for Jesse
 * 
 * @return {array} is array of strings matching requirement of  kata
 */
function helpJesse(array) {
    let recipe = [];
    for (let value of array) {
        if (value.hasOwnProperty('note')) {
            recipe.push(`Pour ${value.amount} mL of ${value.solution} into a ${value.instrument} (${value.note})`);
        } else {
            recipe.push(`Pour ${value.amount} mL of ${value.solution} into a ${value.instrument}`);
        }
    }
    return recipe;
}
