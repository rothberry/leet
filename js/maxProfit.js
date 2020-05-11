/**
 * @param {number[]} prices
 * @return {number}
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 */

var maxProfit = function (prices) {
  let obj = {}
  prices.forEach((buyPrice, idx, arr) => {
    for (let j = idx + 1; j < arr.length; j++) {
      const sellPrice = arr[j]
      let profit = sellPrice - buyPrice
      if (profit > 0) {
        !obj[profit] ? (obj[profit] = [idx, j]) : obj[profit].push([idx, j])
      }
    }
  })
  if (Object.keys(obj).length > 0) {
    let maxProf = Math.max(...Object.keys(obj))
    console.log("Indece:\t", obj[maxProf])
    return maxProf
  } else {
    console.log("no max profit")
    return 0
  }
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([8, 1, 2, 5, 2, 3, 6, 7]))
console.log(maxProfit([7, 6, 4, 3, 1]))

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Not 7-1 = 6, as selling price needs to be larger than buying price.

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
