/*
String repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/java

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"
*/

public class StringRepeat {

  public static String repeatStr(final int repeat, final String string) {

    String result = "";
    for (int i = 0; i < repeat; i++) {
      result += string;
    }
    return result;
  }

}