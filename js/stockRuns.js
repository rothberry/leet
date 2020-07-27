const stock = (prices) => {
  let i = 1
  let output = []
  while (i < prices.length - 1) {
    let prev = prices[i - 1]
    let cur = prices[i]
    let next = prices[i + 1]
    let prevDiff = cur - prev 
    // > 0 ? 1 : -1
    let curDiff = next - cur 
    // > 0 ? 1 : -1
    console.log('prev, ', prevDiff)
    console.log('cur, ', curDiff)
    if (prevDiff > 1 || curDiff > 1) {
      
    }
    
    
    i++
  }
  return Math.max(...output)
}

// console.log(stock([1, 2, 3]))
// console.log(stock([2, 3, 4, 3, 2, 1]))
console.log(stock([3, 2, 2, 1]))
