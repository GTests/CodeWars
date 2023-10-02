/*
Stop gninnipS My sdroW!
https://www.codewars.com/kata/5264d2b162488dc400000001/java

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

public class SpinWords {

  public String spinWords(String sentence) {
    String revWord = "", result = "";
    String[] wordArr = sentence.split(" ");

    for (String word : wordArr) {
      if (word.length() < 5) {
        result += word + " ";
      } else {
        for (int i = word.length() - 1; i >= 0; i--) {
          revWord += word.charAt(i);
        }
        result += revWord + " ";
        revWord = "";
      }
    }
    return result.trim();
  }

}