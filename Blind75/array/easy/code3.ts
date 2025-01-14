/*
CONTAINS DUPLICATE
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/
function containsDuplicate(nums: number[]): boolean {
  const setNums = new Set(nums);

  return nums.length !== setNums.size;
}
// time O(n)
// space O(n)

function containsDuplicate2(nums: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}
// time O(n)
// in the worst case O(n)
// best solution

function containsDuplicate3(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}
// time O(n log n ) --> worst for speed
// space O(1) --> better for memory

console.log("First solution");
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log("Second solution");
console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log("Third solution");
console.log(containsDuplicate3([1, 2, 3, 1]));
console.log(containsDuplicate3([1, 2, 3, 4]));
console.log(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
