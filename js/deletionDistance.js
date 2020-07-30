// !DONE

function deletion_distance(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length
  const total = len1 + len2

  const dp = new Array(len1 + 1)
  for (let i = 0; i <= len1; ++i) {
    dp[i] = new Array(len2 + 1).fill(0)
  }

  for (let i = 1; i <= len1; ++i) {
    for (let j = 1; j <= len2; ++j) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = Math.max(
          1 + dp[i - 1][j - 1],
          Math.max(dp[i - 1][j], dp[i][j - 1])
        )
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  // console.log(dp)
  return str1.length + str2.length - 2 * dp[len1][len2]
}

console.log(deletion_distance("at", "cat"))
console.log(deletion_distance("boat", "got"))
console.log(deletion_distance("thought", "sloughs"))
