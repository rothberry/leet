/**
 * @param {string} str
 * @return {number}
 * !DONE
 */

const INT_MAX = 2 ** 31 - 1
const INT_MIN = -(2 ** 31)

const myAtoi = str => {
  // ! Converts string to integer with optional '+' or '-'
  // * If 1st non=whitespace char is not number, than 0

  const strArr = str.split(" ").find(val => {
    return val !== ""
  })

  if (!strArr) {
    return 0
  } else {
    let i = 0
    const outputArr = []

    while (i < strArr.length) {
      const element = strArr[i]
      if (
        !!Number(element) ||
        element === "-" ||
        element === "+" ||
        Number(element) === 0
      ) {
        outputArr.push(element)
      } else {
        break
      }
      i++
    }

    let output = Number(outputArr.join(""))
    !output ? (output = 0) : null

    if (output > INT_MAX) {
      output = INT_MAX
    } else if (output < INT_MIN) {
      output = INT_MIN
    }

    console.log(outputArr)
    console.log(output)
    return output
  }
}

myAtoi("") // 0
myAtoi("  ") // 0
myAtoi("-5-") // 0
myAtoi("  0000000000012345678") // 12345678
myAtoi("  +0 123") // 0
myAtoi("   -42") // -42
myAtoi("words and 987") // 0
myAtoi("4193 with words ") // 4193
myAtoi("-91283472332") // -2147483648
