/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Given two strings s and t ,
 * write a function to determine if t is an anagram of s.
 * !DONE
 */

const isAnagram = (s, t) => {
  // First sort both strings into arrays
  // Compare sorted strings
  if (s.length !== t.length) return false
  const sSplit = s.split("")
  const tSplit = t.split("")
  const sSort = sSplit.sort() // O(log(n))
  const tSort = tSplit.sort() // O(log(n))
  for (let i = 0; i < tSort.length; i++) {
    //O(n)
    const sEle = sSort[i]
    const tEle = tSort[i]
    if (sEle !== tEle) {
      return false
    }
  }
  return true
}

const isAnagram2 = (s, t) => {
  // With object
  const obj = {}
  s.split("").map(c => (obj[c] = obj[c] ? obj[c] + 1 : 1))
  t.split("").map(c => (obj[c] = obj[c] ? obj[c] - 1 : -1))
  return Object.keys(obj).every(k => obj[k] === 0)
}

console.log(isAnagram2("a", "ab"))
console.log(isAnagram2("anagram", "nagaram"))
console.log(isAnagram2("qwertyuiop", "pqowieuryt"))
console.log(isAnagram2("rat", "cat"))
