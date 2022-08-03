/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

public class shortestWord {
    public static int findShort(String s) {
        String[] strArr = s.split(" ");
        int minLength = strArr[0].length();
        for (String i : strArr) {
            if (i.length() < minLength) {
                minLength = i.length();
            }
        }
        return minLength;
    }
}