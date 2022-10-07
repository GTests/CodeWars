/*
Convert number to reversed array of digits
https://www.codewars.com/kata/5583090cbe83f4fd8c000051

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

public class StringToArray {

  public static int[] digitize(long n) {

    String[] numbers = String.valueOf(n).split("");

    int[] result = new int[numbers.length];
    int counter = 0;

    for (int i = numbers.length - 1; i >= 0; i--) {
      result[counter] = Integer.valueOf(numbers[i]);
      counter++;
    }

    return result;
  }

}