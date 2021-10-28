/**
 * @param {string} s
 * @return {number}
 *
 * Given a string of Roman Numerals
 * the output is their value as an integer
 *
 */

const romNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const specials = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
}

const romanToIntFirst = (s) => {
  const romArr = s.split("")

  // First thought is to loop over the array and apply the values for each numeral
  let total = 0
  // romArr.forEach((numeral) => {
  //   total += romNums[numeral]
  // })
  // return total

  // How to account for the IV, IX, CM...
  // MCMXCIV  => 1994
  // M / CM / XC / IV

  let i = 0
  while (i < romArr.length) {
    // first check if the current pair of elements (i and i + 1) are our special cases, if so then we apply those cases, and move our index forward 1
    let element = romArr[i]
    let pair = romArr.slice(i, i + 2).join("")
    console.log(pair)
    if (!!specials[pair]) {
      total += specials[pair]
      i++
    } else {
      total += romNums[element]
    }
    // console.log(total)
    i++
  }
  return total
}

// TESTING

let s = "III"
let ans = 3
// console.log(romanToIntFirst(s), ans)
// s = "IV"
// ans = 4
// console.log(romanToIntFirst(s), ans)
// s = "IX"
// ans = 9
// console.log(romanToIntFirst(s), ans)
// s = "LVIII"
// ans = 58
// console.log(romanToIntFirst(s), ans)
// s = "MCMXCIV"
// ans = 1994
// console.log(romanToIntFirst(s), ans)

const romanToInt = function (s) {
  let total = 0
  let roms = s.split("")
  for (let i = 0; i < roms.length; i++) {
    const value = romNums[roms[i]]
    const nextValue = romNums[roms[i + 1]]
    if (value < nextValue) {
      total = nextValue - value
      console.log(total)
      i += 1
    } else {
      total += value
      console.log(total)
    }
  }
  return total
}

// TESTING

s = "III"
ans = 3
console.log(romanToInt(s), ans)
s = "IV"
ans = 4
console.log(romanToInt(s), ans)
s = "IX"
ans = 9
console.log(romanToInt(s), ans)
s = "LVIII"
ans = 58
console.log(romanToInt(s), ans)
s = "MCMXCIV"
ans = 1994
console.log(romanToInt(s), ans)
