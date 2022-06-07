/**
 * Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.


 */

function firstNotRepeatingCharacter(s) {
  
  let cache = {}
  const strArr = s.split("")
  for (let i = 0; i < strArr.length; i++) {
    let cur = strArr[i]
    if (cache[cur]) {
      cache[cur] = 2
    } else {
      cache[cur] = 1
    }
  }
  for (let k in cache) {
    // console.log(cache[k])
    if (cache[k] < 2) {
      return k
    }
  }
  // console.log(Object.values(cache))  
  return '_'
}
