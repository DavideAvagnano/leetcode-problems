/**
  Two Sum
  Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

  You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

  Return the answer with the smaller index first.

  Example 1:
  Input: 
  nums = [3,4,5,6], target = 7
  Output: [0,1]
  Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

  Example 2:
  Input: nums = [4,5,6], target = 10
  Output: [0,2]

  Example 3:
  Input: nums = [5,5], target = 10
  Output: [0,1]

  Constraints:
  2 <= nums.length <= 1000
  -10,000,000 <= nums[i] <= 10,000,000
  -10,000,000 <= target <= 10,000,000
 */

export const testCases = [
  { nums: [3, 4, 5, 6], target: 7 },
  { nums: [4, 5, 6], target: 10 },
  { nums: [5, 5], target: 10 },
];

export class Solution {
  twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

  twoSum2(nums: number[], target: number) {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    return [];
  }
}

const solution = new Solution();

console.log("O(n^2) time, O(1) space");
testCases.forEach((testCase) => {
  console.log(solution.twoSum(testCase.nums, testCase.target));
});

console.log("O(n) time, O(n) space");
testCases.forEach((testCase) => {
  console.log(solution.twoSum2(testCase.nums, testCase.target));
});
