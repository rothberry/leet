/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//  ? Return the index of the first occurence needle of the haystack

const strStr = (haystack, needle) => {
  if (needle.length < 1) return 0
  const haystackArr = haystack.split("")
  let i = 0
  while (i < haystackArr.length) {
    const arrSlice = haystackArr.slice(i, i + needle.length).join("")
    if (arrSlice === needle) {
      return i
    }
    i++
  }
  return -1
}

console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("aaaaaaaabba", "bba"))
console.log(strStr("asd", ""))
