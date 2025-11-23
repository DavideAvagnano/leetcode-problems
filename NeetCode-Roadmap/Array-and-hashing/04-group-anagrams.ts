/**
    Group Anagrams
    Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    Example 1:
    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    Example 2:
    Input: strs = ["x"]
    Output: [["x"]]

    Example 3:
    Input: strs = [""]
    Output: [[""]]

    Constraints:
    1 <= strs.length <= 1000.
    0 <= strs[i].length <= 100
    strs[i] is made up of lowercase English letters.
 */

export const testCases = [
  { strs: ["act", "pots", "tops", "cat", "stop", "hat"] },
  { strs: ["x"] },
  { strs: [""] },
];

export class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr)!.push(str);
    }
    return Array.from(map.values());
  }
}

const solution = new Solution();

console.log("");
testCases.forEach((testCase) => {
  console.log(`Input: ${JSON.stringify(testCase.strs)}`);
  console.log(
    `Output: ${JSON.stringify(solution.groupAnagrams(testCase.strs))}`
  );
  console.log("---");
});
