/*
Calculate average
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/java

Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.

*/

public class CalculateAverage {

  public static double find_average(int[] array) {
    if (array.length == 0) {
      return 0;
    } else {
      double sum = 0;
      for (int num : array) {
        sum += num;
      }
      return sum / array.length;
    }
  }

}