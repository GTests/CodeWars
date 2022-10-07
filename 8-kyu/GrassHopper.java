/*
Grasshopper - Summation
DESCRIPTION:

Write a program that finds the summation of every number from 1 to num. 
The number will always be 

example:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

public class GrassHopper {

    public static int summation(int n) {
        int result = 0;
        for (int i = 1; i <= n; i++) {
            result += i;
        }
        return result;
    }
}