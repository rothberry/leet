/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const compareTriplets = (a, b) => {
  let output = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      output[0]++
    } else if (b[i] > a[i]) {
      output[1]++
    }
  }
  return output
}

// * TESTING
console.log("TESTING")
let a = [1, 2, 3],
  b = [3, 2, 1],
  ans = [1, 1],
  out = compareTriplets(a, b)
console.log({ a, b })
console.log(out, ans)
