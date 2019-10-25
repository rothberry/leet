const lengthOfLongestSubstring = (s) => {
  // Takes in a string
  // create counter array?
  let i = 0
  let resCount = 0
  let resArr = []

  while (i < s.length) {
    console.log(s[i])
    let doesInclude = resArr.includes(s[i])
    if (!s[i] || doesInclude) {
      if (resCount < resArr.length) {
        resCount = resArr.length
      }
      resArr = [s[i]]
      console.log('resarrnoe: ', resArr)
    } else {
      resArr.push(s[i])
      console.log('resarrnyes: ', resArr)
    }
    i++
  }
  return resCount
}

let strOne = 'abcabcbb'
let strTwo = 'bbbbb'
let strThree = 'pwwkew'
let strFour = 'dvdf'

// console.log('output: ', lengthOfLongestSubstring(strOne))
// // * 3 of 'abc'
// console.log('output: ', lengthOfLongestSubstring(strTwo))
// // * 1 of 'b
// console.log('output: ', lengthOfLongestSubstring(strThree))
// // * 3 of 'wke'
console.log('output: ', lengthOfLongestSubstring(strFour))
// * 3 of 'vdf'