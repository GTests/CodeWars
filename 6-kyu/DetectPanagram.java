
/*
Detect Pangram
https://www.codewars.com/kata/545cedaa9943f7fe7b000048

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

import java.util.*;

public class DetectPanagram {
  public boolean check(String sentence) {
    // list stores all chars that match
    // outer loop picks charAt(i) and inner loop iterates through alphabet
    // if chars match(both converted to lowercase), add char into list and keep
    // checking
    List<Character> myList = new ArrayList<>();
    int counter = 0;
    for (int i = 0; i < sentence.length(); i++) {
      char character = sentence.charAt(i);
      for (char c = 'a'; c <= 'z'; c++) {
        Character myChar = Character.toLowerCase(character);
        if (myChar == c && !myList.contains(myChar)) {
          myList.add(myChar);
          counter++;
        }
      }
    }
    if (counter >= 26) {
      return true;
    } else {
      return false;
    }
  }
}