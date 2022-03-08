// Given an Array of strings,
// return the shortest string. 
// If there is more than one string of that length, return the string that comes first in the list. The Array will have a minimum length of 1.

const shortest = strs => {
  // loop through strs
  // if the current length of str is less than the current min
  // replace current min

  let currentMin = strs[0]
  strs.forEach((str) => {
    if (str.length < currentMin.length) {
      currentMin = str
    }
  })
  return currentMin
}


// * TESTING

let strs = ['aaa', 'a', 'bb', 'ccc']
let out = 'a'
console.log(shortest(strs), out)


strs = ['cat', 'hi', 'dog', 'an']
out = 'hi'
console.log(shortest(strs), out)

strs = ['flower', 'juniper', 'lily', 'dandelion']
out = 'lily'
console.log(shortest(strs), out)
