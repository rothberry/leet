/**
 * @param {number} n
 * @return {string[]}
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 * !UNFINISHED
 */
const generateParenthesis = n => {
  // Start by creating an array with n open and n closed
  // Starting pivot is n and n+1
  let parArr = []
  let i = 0
  while (i < n * 2) {
    if (i < n) {
      parArr.push("(")
    } else {
      parArr.push(")")
    }
    i++
  }
  let output = [parArr.join("")]
  let j = 0
  let k = n
  while (k < n * 2) {
    // swap k and k+1
    // const cur = parArr[k]
    // const next = parArr[k + 1]
    // parArr.splice(k, 2, next, cur)
    // ;[parArr[k], parArr[k + 1]] = [parArr[k + 1], parArr[k]]
    let b = parArr[k + 1]
    parArr[k + 1] = parArr[k]
    parArr[k] = b
    console.log(parArr)
    output.push(parArr.join(""))
    k++
  }

  return output
}

const generateParenthesis2 = n => {
  let output = ["()"] // for n == 1
  for (let i = 1; i < n; i++) {
    let currentOutput = []
    // surround with
    output.forEach(ele => {
      currentOutput.push("(" + ele + ")")
    })
    // add to end
    output.forEach(ele => {
      currentOutput.push(ele + "()")
    })
    // add to front
    output.forEach(ele => {
      if (!currentOutput.includes("()" + ele)) {
        currentOutput.push("()" + ele)
      }
    })
    output = currentOutput
  }
  return output
} 


console.log(generateParenthesis2(1))
// "()"

console.log(generateParenthesis2(2))
// "()[]",
// "[()]",

console.log(generateParenthesis2(3))
// "()()[]", => add [] to end
// "(())[]",
//// "[]()()", => add [] to front already got it
// "[](())", => add [] to front
// "[()()]", => surround all with [ ]
// "[(())]",

console.log(generateParenthesis2(4))
// add to end
// "()()()[]",
// "(()())[]", 
// "((()))[]",
// "(())()[]",
// "()(())[]",
// add to front
//// "[]()()()",
// "[](()())", 
// "[]((()))",
// "[](())()",
// "[]()(())",
// surround 
// "[()()()]",
// "[(()())]", 
// "[((()))]",
// "[(())()]",
// "[()(())]",

