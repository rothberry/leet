/**
 * @param {number[]} prices
 * @return {number}
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * !DONE
 */

const maxProfit = (prices) => {
	// * Brute force O(n^2)
	// Check the profit for each pair of buy sell dates
	// add to obj of key=profit, value=[buyIdx, sellIdx]
	// return the maxProfit
	let obj = {}
	prices.forEach((buyPrice, idx, arr) => {
		for (let j = idx + 1; j < arr.length; j++) {
			const sellPrice = arr[j]
			let profit = sellPrice - buyPrice
			if (profit > 0) {
				!obj[profit] ? (obj[profit] = [idx, j]) : null
			}
		}
    console.log(obj)
	})
	// ineffceint, will refactor if time
	if (Object.keys(obj).length > 0) {
		let maxProf = Math.max(...Object.keys(obj))
		console.log("Indece:\t", obj[maxProf])
		return maxProf
	} else {
		console.log("no max profit")
		return 0
	}
}

const maxProfit2 = (prices) => {
  // * Solution 2
  // Start with a max profit of 0 and 2 starting indeces for buying(left=0) and selling (right=1)
  // loop until the right index reaches the end
  // for each iteration
  // check if the left price is less than the right price (this means there's a profit)
  // set maxProfit to max of maxProfit and currentProfit

  let left = 0; // Buy
  let right = 1; // sell
  let maxProf = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      maxProf = Math.max(maxProf, profit);
    } else {
      left = right;
    }
    right++;
    console.log({left, right, maxProf})
  }
  return maxProf;

}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]))
console.log(maxProfit2([8, 1, 2, 5, 2, 3, 6, 7]))
console.log(maxProfit2([7, 6, 4, 3, 1]))

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Not 7-1 = 6, as selling price needs to be larger than buying price.

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
