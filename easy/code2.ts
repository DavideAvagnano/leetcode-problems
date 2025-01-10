/*
STRING MATCHING
Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
A substring is a contiguous sequence of characters within a string

Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:
Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
All the strings of words are unique.
*/
function stringMatching(words: string[]): string[] {
  let result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j].includes(words[i]) && i !== j) {
        result.push(words[i]);
        break;
      }
    }
  }
  return result;
}
// time O(n^2)
// space O(n)

function stringMatching2(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);

  const result = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        result.add(words[i]);
        break;
      }
    }
  }
  return Array.from(result);
}
// time O(n log n + n^2) --> (n^2)
// space O(n)
// (same complessity overall, but in general is a better solution)

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));

console.log(stringMatching2(["mass", "as", "hero", "superhero"]));
console.log(stringMatching2(["leetcode", "et", "code"]));
console.log(stringMatching2(["leetcoder", "leetcode", "od", "hamlet", "am"]));
