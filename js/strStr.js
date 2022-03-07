/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => {
  //  ? Return the index of the first occurence needle of the haystack
  // Loop over the haystack as an array
  // for each iteration,
  // check if a slice of the haystack of length needle.length is equal to the needle
  // if so, return index
  // if no match return -1

  // * outliers
  // if needle.length is empty return 0
  
  if (needle.length < 1) return 0
  const haystackArr = haystack.split("")
  let i = 0
  while (i < haystackArr.length) {
    const arrSlice = haystackArr.slice(i, i + needle.length).join("")
    console.log(arrSlice)
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
console.log(strStr("", ""))
