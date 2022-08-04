/*
DESCRIPTION:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Examples:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

import java.util.*;

class Solution {
    public static String removeDuplicateWords(String s) {
        String[] wordsArr = s.split(" ");
        ArrayList<String> resultList = new ArrayList<>();
        for (String word : wordsArr) {
            if (!resultList.contains(word)) {
                resultList.add(word);
            }
        }
        return String.join(" ", resultList);
    }
}