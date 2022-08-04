/*
Square(n) Sum
https://www.codewars.com/kata/515e271a311df0350d00000f

DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/

class Kata {
    public static int squareSum(int[] n) {
        int total = 0;
        for (int i = 0; i < n.length; i++) {
            total += (n[i] * n[i]);
        }
        return total;
    }
}