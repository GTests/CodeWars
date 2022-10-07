/*
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
*/

class Isograms {
    public static boolean isIsogram(String str) {
        boolean isIsogram = true;
        String[] charArr = str.split("");
        for (int i = 0; i < charArr.length; i++) {
            String letter = charArr[i];
            for (int j = i + 1; j < charArr.length; j++) {
                String letterTwo = charArr[j];
                if (letter.equalsIgnoreCase(letterTwo)) {
                    isIsogram = false;
                    break;
                }
            }
        }
        return isIsogram;
    }
}