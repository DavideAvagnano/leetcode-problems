/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

Constraints:
s and t consist of lowercase English letters.

You should aim for a solution with O(n + m) time and O(1) space, where n is the length of the string s and m is the length of the string t.
*/

// SORTING
function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
// time O(nlogn + mlogm)
// space O(1) or O(n + m) - depend on sorting algorithm

// HASH TABLE
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countS: { [key: string]: number } = {};
  const countT: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
}
// time O(n + m)
// space O(1)

// HASH TABLE (Optimal)
function isAnagram3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return count.every((val) => val === 0);
}
// time O(n + m)
// space O(1)

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));

console.log(isAnagram2("racecar", "carrace"));
console.log(isAnagram2("jar", "jam"));

console.log(isAnagram3("racecar", "carrace"));
console.log(isAnagram3("jar", "jam"));
