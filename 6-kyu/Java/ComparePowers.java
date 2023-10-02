
/*
Detect Pangram
https://www.codewars.com/kata/545cedaa9943f7fe7b000048

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

public class ComparePowers {
  public static int comparePowers(int[] n1, int[] n2) {

    double sum1 = Math.log10(n1[0]) * n1[1];
    double sum2 = Math.log10(n2[0]) * n2[1];

    if (sum1 > sum2) {
      return -1;
    } else if (sum1 < sum2) {
      return 1;
    } else {
      return 0;
    }
  }
}