/*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
Reverse words

Description:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

public class ReverseWords {
  public static String reverseWords(final String original) {

    // if String only contains emoty spaces
    if (original.trim().length() == 0) {
      return original;
    }

    String[] wordArr = original.split(" ");
    String result = "";
    for (String word : wordArr) {
      for (int i = word.length() - 1; i >= 0; i--) {
        result += word.charAt(i);
      }
      result += " ";
    }
    return result.trim();
  }
}