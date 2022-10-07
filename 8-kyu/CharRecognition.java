/*
Correct the mistakes of the character recognition software
https://www.codewars.com/kata/577bd026df78c19bca0002c0/java

DESCRIPTION:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

public class CharRecognition {

  public static String correct(String str) {
    String result = "";
    for (String c : str.split("")) {
      if (c.equals("5")) {
        c = "S";
      } else if (c.equals("0")) {
        c = "O";
      } else if (c.equals("1")) {
        c = "I";
      }
      result += c;
    }
    return result;
  }

}