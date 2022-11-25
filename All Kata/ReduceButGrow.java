/*
Beginner - Reduce but Grow
https://www.codewars.com/kata/57f780909f7e8e3183000078

Description:

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

import java.util.*;

public class ReduceButGrow {
  public static int grow(int[] x) {
    return Arrays.stream(x).reduce(1, (num1, num2) -> num1 * num2);
  }
}
