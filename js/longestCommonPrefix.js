// !DONE
// TODO refactor

// const longestCommonPrefix = str => {
//   // ! Brute Force
//   //? if the nth letter of each index are equal add to result string
//   //? up until the nth letter of the smallest word
//   // * Find min amount of characters
//   let minLength = 0
//   let sortArr = str.sort((a, b) => {
//     return a.length < b.length ? -1 : 1
//   })
//   if (sortArr.length > 0) {
//     minLength = sortArr[0].length
//   }
//   if (minLength === 0) {
//     return ""
//   } else if (minLength > 0) {
//     let arrLength = str.length
//     let testArr = []
//     let testString = true
//     for (i = 0; testString; i++) {
//       for (n = 0; n < str.length; n++) {
//         testArr.push(str[n].slice(0, i))
//       }
//       console.log(testArr)
//       for (n = 0; n < testArr.length - 1; n++) {
//         testString = testArr[n] === testArr[n + 1]
//         console.log(testString)
//       }
//       i++
//     }
//     return testArr[i]
//   }
//   console.log(minLength)
// }

const longestCommonPrefix = str => {
  if (str.length === 0) {
    return ""
  }
  let r = ""
  for (let i = 0; i < str[0].length; i++) {
    // console.log('iiiii: ', i)
    for (let j = 0; j < str.length; j++) {
      // console.log('j: ', j)
      if (str[0][i] !== str[j][i]) {
        return r
      }
    }
    r += str[0][i]
  }
  return r
}

let one = ["flower", "flow", "flight"]
let two = ["dog", "racecar", "car"]
let three = ['a','a']
// let a = 'f'
// let b = 'f'
console.log("one: ", longestCommonPrefix(one)) // * 'fl'
console.log("two: ", longestCommonPrefix(two)) // * ''
console.log("three: ", longestCommonPrefix(three))

// if (str.length < 1 || str[0] === "") {
//   return ""
// } else if (str.length === 1) {
//   return str[0]
// } else if (str[0][0] !== str[1][0]) {
//   return ""
// } else {
//   let i = 1
//   let testString = true
//   let testArr = []
//   while (testString) {
//     for (n = 0; n < str.length; n++) {
//       testArr.push(str[n].slice(0, i))
//     }
//     console.log(testArr)
//     for (n = 0; n < testArr.length - 1; n++) {
//       testString = testArr[n] === testArr[n + 1]
//       console.log(testString)
//     }
//     i++
//   }
//   return testArr[i]
// }
