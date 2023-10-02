/*
Find The Parity Outlier
https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

public class ParityOutliner {
  static int find(int[] integers) {

    int even = 0;
    int odd = 0;
    int cycle = 0;

    for (Integer value : integers) {
      if (value % 2 == 0) {
        cycle++;
        even = value;
      } else {
        odd = value;
      }
    }
    return (cycle > 1) ? odd : even;
  }
}