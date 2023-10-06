/**
8 kyu
Beginner Series #2 Clock
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

lock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

// 1. Research formula on converting s,m or hour --> ms
// 2. Apply logic to all 3 values and convert into ms
// 3. Return sum of milliseconds
function past(h, m, s) {
    const hourToMs = h * 60 * 60 * 1000;
    const minuteToMs = m * 60 * 1000;
    const secondToMs = s * 1000;
    return hourToMs + minuteToMs + secondToMs;
}
