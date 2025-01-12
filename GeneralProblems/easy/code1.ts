/*
PREFIX COUNT
you are given an array of strings words and a string pref.
Return the number of strings in words that contain pref as a prefix.
A prefix of a string s is any leading contiguous substring of s.

Example 1:
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Example 2:
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.

Constraints:
1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.
*/

function prefixCount(words: string[], pref: string): number {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) count++;
  }
  return count;
}
// time O(n)
// space O(1)

function prefixCount2(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref)).length;
}
// time O(n)
// space O(n)

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount2(["pay", "attention", "practice", "attend"], "at"));
