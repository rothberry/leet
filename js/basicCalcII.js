/**
 * @param {string} s
 * @return {number}
 * Implement a basic calculator to evaluate a simple expression string.
 * The integer division should truncate toward zero.
 * !UNFINISHED
 */

var calculate = function(s) {
  let calcArr = s.split("").filter(x => x !== " ")
  let operObj = {}
  calcArr.forEach((op, idx) => {
    if (!Number(op)) {
      operObj[op] ? operObj[op].push(idx) : (operObj[op] = [idx])
    }
  })
  console.log("askfhgasfjas", operObj)
  let output = 0
  let i = 0
  // while (i < calcArr.length) {
  for (const k in operObj) {
    if (operObj.hasOwnProperty(k)) {
      const element = operObj[k]

      let m = s.split("*")
      let d = s.split("/")
      let product = Number(m[0][m.length]) * Number(m[1][0])

      output += product
    }
  }

  // if (calcArr.findIndex(val => val === "*") > -1) {

  // }

  // Find all * or /
  // Do oper surrounding numbers
  // Find all + or -
  // Do oper surrounding numbers
  //   i++
  // }
  return output
}

console.log(calculate("3+2*2*2"))
// 2*2 => 3 + 4
// Output: 7

// console.log(calculate(" 3/2 "))
// // Output: 1

// console.log(calculate(" 3+5 / 2 "))
// // 5/2 => 3 + 2
// // Output: 5
