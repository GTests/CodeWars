
/*
Make the Deadfish Swim
https://www.codewars.com/kata/5264d2b162488dc400000001/java

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

Deadfish.parse("iiisdoso") =- new int[] {8, 64};
*/

import java.util.*;

public class DeadFish {

  public static int[] parse(String data) {

    String[] chars = data.split("");
    List<Integer> resultList = new ArrayList<>();
    int counter = 0;

    for (String s : chars) {
      if (s.equalsIgnoreCase("i")) {
        counter++;
      }
      if (s.equalsIgnoreCase("d")) {
        counter--;
      }
      if (s.equalsIgnoreCase("s")) {
        counter *= counter;
      }
      if (s.equalsIgnoreCase("o")) {
        resultList.add(counter);
      }
    }

    int arrayLength = resultList.size();
    int[] resultArr = new int[arrayLength];
    for (int i = 0; i < arrayLength; i++) {
      resultArr[i] = resultList.get(i);
    }
    return resultArr;
  }

}