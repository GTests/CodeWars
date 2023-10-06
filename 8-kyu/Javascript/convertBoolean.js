// 8 kyu
// Convert a Boolean to a String
// https://www.codewars.com/kata/551b4501ac0447318f0009cd

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
    switch(b) {
      case true:
        return 'true'
      case false:
        return 'false'
    }
  }
