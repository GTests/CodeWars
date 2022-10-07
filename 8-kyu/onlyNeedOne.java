
/**
 * You only need one - Beginner
 * https://www.codewars.com/kata/57cc975ed542d3148f00015b
 * 
 * DESCRIPTION:
 * You will be given an array a and a value x. All you need to do is check
 * whether the provided array contains the value.
 * 
 * Array can contain numbers or strings. X can be either.
 * 
 * Return true if the array contains the value, false if not.
 */

import java.util.*;

public class onlyNeedOne {

  // smart example
  static boolean check(Object[] a, Object x) {
    return Arrays.asList(a).contains(x);
  }

  static boolean myCheck(Object[] a, Object x) {
    for (int i = 0; i < a.length; i++) {
      if (x == a[i]) {
        return true;
      }
    }
    return false;
  }

  // You can have Array of object rather than one specific datatype like String
  static boolean example() {
    Object[] arr = { "hello", 2 };
    Arrays.asList(arr);
    return true;
  }

}