/*
Find the stray number
https://www.codewars.com/kata/57f609022f4d534f05000024

Description:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

class Solution {
  static int stray(int[] numbers) {
    int result = 0;
    int counter = 0;

    for (int num : numbers) {
      for (int num2 : numbers) {
        if (num == num2) {
          counter++;
        }
      }
      if (counter == 1) {
        result = num;
        break;
      }
      counter = 0;
    }
    return result;
  }
}