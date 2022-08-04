/*
Century From Year
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

DESCRIPTION:
Introduction
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

Task:
Given a year, return the century it is in.

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

class Solution {
    public static int century(int number) {
        int result;
        String century = "";

        String[] digitArr = String.valueOf(number).split("");
        century = century + Integer.valueOf(digitArr[0]) + Integer.valueOf(digitArr[1]);
        result = Integer.valueOf(century);

        if (number < 1000) {
            if (number < 100) {
                return 1;
            } else {
                // 101, 400...999
                String[] digitArr2 = String.valueOf(number).split("");
                result = Integer.valueOf(digitArr2[0]);
                if (number % 100 != 0) {
                    // 401, 999, 705...
                    return result + 1;
                } else {
                    // 300, 400, 900..
                    return result;
                }
            }
        } else if (number % 100 != 0) {
            return result + 1;
        }
        return result;
    }
}