/*
Credit Card Mask
https://www.codewars.com/kata/5412509bd436bd33920011bc

DESCRIPTION:
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

class Maskify {
    public static String maskify(String str) {
        String result = "";
        if (str.length() > 4) {
            String[] charArr = str.split("");
            for (int i = 0; i < charArr.length; i++) {
                if (i < charArr.length - 4) {
                    result += "#";
                } else {
                    result += charArr[i];
                }
            }
        } else {
            return str;
        }
        return result;
    }
}