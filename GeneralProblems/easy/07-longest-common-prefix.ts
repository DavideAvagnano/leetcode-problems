/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

const testCases = [
  { input: ["flower", "flow", "flight"] },
  { input: ["dog", "racecar", "car"] },
];

export class Solution {
  longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      const current = strs[i];
      while (current.indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") return "";
      }
    }
    return prefix;
  }

  longestCommonPrefix2(strs: string[]): string {
    let minLength = Math.min(...strs.map((str) => str.length));
    for (let i = 0; i < minLength; i++) {
      const char = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) {
          return strs[0].substring(0, i);
        }
      }
    }
    return strs[0].substring(0, minLength);
  }

  longestCommonPrefix3(strs: string[]): string {
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];

    let i = 0;
    while (i < first.length && i < last.length && first[i] === last[i]) {
      i++;
    }
    return first.substring(0, i);
  }
}

const solution = new Solution();

console.log("First Solution:");
testCases.forEach((testCase) => {
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${solution.longestCommonPrefix(testCase.input)}`);
  console.log("---");
});

console.log("\nSecond Solution:");
testCases.forEach((testCase) => {
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${solution.longestCommonPrefix2(testCase.input)}`);
  console.log("---");
});

console.log("\nThird Solution:");
testCases.forEach((testCase) => {
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${solution.longestCommonPrefix3(testCase.input)}`);
  console.log("---");
});
