/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const testCases = [
  { input: "()" },
  { input: "()[]{}" },
  { input: "(]" },
  { input: "([])" },
  { input: "([)]" },
];

export class Solution {
  isValid(s: string): boolean {
    const pairs: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    const stack: string[] = [];

    for (const char of s) {
      if (char in pairs) {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
}

const solution = new Solution();

testCases.forEach((testCase) => {
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${solution.isValid(testCase.input)}`);
  console.log("---");
});
