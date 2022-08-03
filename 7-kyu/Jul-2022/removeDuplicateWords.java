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