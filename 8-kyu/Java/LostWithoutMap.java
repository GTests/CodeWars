/*
https://www.codewars.com/kata/57f781872e3d8ca2a000007e
Beginner - Lost Without a Map

Description:

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

import java.util.*;

public class LostWithoutMap {
  public static int[] map(int[] arr) {
    return Arrays.stream(arr).map(x -> x * 2).toArray();
  }
}