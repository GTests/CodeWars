/*
Remove String Spaces
https://www.codewars.com/kata/57eae20f5500ad98e50002c5

Description:

Simple, remove the spaces from the string, then return the resultant string.
*/

public class RemoveStringSpaces {
  public static String noSpace(String x) {
    String[] wordArr = x.split(" ");
    String result = "";
    for (String word : wordArr) {
      result += word;
    }
    return result;
  }
}