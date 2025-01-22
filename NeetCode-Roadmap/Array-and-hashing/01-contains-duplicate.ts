/*
Description
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false

Recommended Time & Space Complexity
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.
*/
function hasDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
// time O(n^2)
// space O(1)

function hasDuplicate2(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}
// time O(n log n)
// space O(n) in worst case

function hasDuplicate3(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
// time O(n)
// space O(n)

function hasDuplicate4(nums: number[]): boolean {
  return new Set<number>(nums).size < nums.length;
}
// time O(n)
// space O(n)

console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));

console.log(hasDuplicate2([1, 2, 3, 3]));
console.log(hasDuplicate2([1, 2, 3, 4]));

console.log(hasDuplicate3([1, 2, 3, 3]));
console.log(hasDuplicate3([1, 2, 3, 4]));

console.log(hasDuplicate4([1, 2, 3, 3]));
console.log(hasDuplicate4([1, 2, 3, 4]));
