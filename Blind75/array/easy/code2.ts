/*
BEST TIME TO BUY AND SELL STOCKS
You are given an array prices where prices[i] is the price of a given stock on the i^th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity;
  let maxProfit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
// time O(n)
// space O(1)

function maxProfit2(prices: number[]): number {
  let min: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }
  return maxProfit;
}
// time O(n)
// space O(1)
// (just a different solution but the result is the same, even in time and space complexities)

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([7, 6, 4, 3, 1]));
