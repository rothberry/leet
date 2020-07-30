// !DONE
// TODO refactor

const longestWord = sen => {
  // code goes here
  // * first separate by space
  // * create an object with key of string and val of length
  // * find first val with max val
  const senArr = sen.split(' ')
  console.log(senArr)
  const senHash = {}
  senArr.forEach(ele => {
    let senCheck = ele.includes("&", "!", ",", ".")
    if (!senCheck) {
      senHash[ele] = ele.length
    }
  })

  const senMax = Object.keys(senHash).reduce((a, b) => (senHash[a] >= senHash[b] ? a : b))
  // const senMax = senArr.reduce((a, b) => (senHash[a] >= senHash[b] ? a : b))
  // console.log(senHash)
  return senMax
}

// keep this function call here
 
const s1 = "fun&!! time"
// * Output: time
const s2 = "I love dogs"
// * Output: love

console.log(longestWord(s1))
console.log(longestWord(s2))
