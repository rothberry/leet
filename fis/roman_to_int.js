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
  // We need to split the array into characters
  // Create a starting total of 0
  // First thought is to loop over the array and apply the values for each numeral
  // Inside the loop:
  // increase total by the value for the string
  // ex: III => I(1) + I(1) + I(1) = 3
  // romArr.forEach((numeral) => {
  //   total += romNums[numeral]
  // })
  // return total

  // How to account for the IV, IX, CM...
  // first check if the current pair of elements (i and i + 1) are our special cases, if so then we increase the total by the special count, and move our index forward 1
  // MCMXCIV  => 1994
  // M(1000) + CM(900) + XC(90) + IV(4)

  // ? Another way for thes special cases
  // Inside the loop:
  // If the NEXT value is GREATER THAN our current value,
  // Then instead of finding the special pair,
  // we increase the total by NEXT - CURRENT and the counter by 1
  // EX: MCMXCIV  => 1994
  // M(1000) + (M(1000) - C(100)) + ()

  const romArr = s.split("")
  let total = 0
  let i = 0
  while (i < romArr.length) {
    let element = romArr[i]
    let pair = romArr.slice(i, i + 2).join("")
    console.log(pair)
    if (!!specials[pair]) {
      total += specials[pair]
      i++
    } else {
      total += romNums[element]
    }
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
    console.log({ value, nextValue })
    if (value < nextValue) {
      total = nextValue - value
      console.log("1", total)
      i += 1
    } else {
      total += value
      console.log("2", total)
    }
  }
  return total
}

// TESTING

// s = "III"
// ans = 3
// console.log(romanToInt(s), ans)
// s = "IV"
// ans = 4
// console.log(romanToInt(s), ans)
// s = "IX"
// ans = 9
// console.log(romanToInt(s), ans)
// s = "LVIII"
// ans = 58
// console.log(romanToInt(s), ans)
s = "MCMXCIV"
ans = 1994
console.log(romanToInt(s), ans)
