/*
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

class Kata {

    public static String solution(String str) {
        String result = "";
        String[] charArr = str.split("");
        for (int i = charArr.length - 1; i >= 0; i--) {
            result += charArr[i];
        }
        return result;
    }

}