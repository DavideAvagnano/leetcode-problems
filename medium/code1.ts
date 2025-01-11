/*
REVERSE INTEGER
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
-2^31 <= x <= 2^31 - 1
*/
function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;

  const sign = x < 0 ? -1 : 1;

  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join(""),
    10
  );

  if (reversed > INT_MAX) {
    return 0;
  }

  return sign * reversed;
}
// time O(n)
// space O(n)

function reverse2(x: number): number {
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;

  let reversed = 0;
  let num = Math.abs(x);

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (reversed < min || reversed > max) {
    return 0;
  }

  return x < 0 ? -reversed : reversed;
}
// O(1) --> (max 10 digit for a 31 bit number)
// O(1) --> (not used array or string for store data)

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

console.log(reverse2(123));
console.log(reverse2(-123));
console.log(reverse2(120));
