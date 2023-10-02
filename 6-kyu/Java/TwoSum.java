/*
Two Sum
https://www.codewars.com/kata/52c31f8e6605bcc646000082

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

*/

public class TwoSum {

  public static int[] twoSum(int[] nums, int target) {
    int[] result = new int[2];

    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if ((nums[i] + nums[j]) == target) {
          result[0] = i;
          result[1] = j;
          break;
        }
      }
    }
    return result;
  }
}