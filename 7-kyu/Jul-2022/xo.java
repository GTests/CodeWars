/*
Exes and Ohs
DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false 
*/

class xo {
    public static boolean getXO(String str) {
        String[] charArr = str.split("");
        int xCounter = 0, oCounter = 0;
        for (String i : charArr) {
            if (i.equalsIgnoreCase("o")) {
                oCounter++;
            } else if (i.equalsIgnoreCase("x")) {
                xCounter++;
            }
        }
        return xCounter == oCounter;
    }
}