/*
https://www.codewars.com/kata/53369039d7ab3ac506000467
Convert boolean values to strings 'Yes' or 'No'.

Description:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

class YesOrNo {
  public static String boolToWord(boolean b) {
    if (b == true) {
      return "Yes";
    } else {
      return "No";
    }
  }
}