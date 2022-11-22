/*
 * Count of positives / sum of negatives
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044
 * 
 * Description:
 * 
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers
 * and the second element is sum of negative numbers.
 * 0 is neither positive nor negative.
 * If the input is an empty array or is null, return an empty array.
 * 
 * Example
 * For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you
 * should return [10, -65].
 */

public class CountPositiveNegatives {

  public static int[] countPositivesSumNegatives(int[] input) {
    if (input == null) {
      return new int[0];
    } else if (input.length == 0) {
      return new int[0];
    } else {
      int positiveCounter = 0;
      int negativeSum = 0;
      for (int num : input) {
        if (num > 0) {
          positiveCounter++;
        } else {
          negativeSum += num;
        }
      }
      return new int[] { positiveCounter, negativeSum };
    }
  }

}
