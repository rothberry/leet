// For parentheses to be considered balanced, there must an opening parenthesis followed by a matching closing parenthesis.
// Given a string containing only parentheses,
// return the number of additional parentheses needed for the string to be considered balanced.
// The input string will have a minimum length of 1.

const balancedParentheses = (par) => {
  // Test how many opening vs closing parentheses
  // return the difference
  // Loop through array
  // add counter for opening and closing respec
  // stretch, if starts with open or ends with close, plus 1 each

  let opening = 0,
    closing = 0,
    extra = 0
  par.split("").forEach((p) => {
    p === "(" ? opening++ : closing++
  })
  return Math.abs(opening - closing) + extra
}

// * TESTING

let par = "(()())"
let out = 0
console.log(balancedParentheses(par), out)

par = "()))"
out = 2
console.log(balancedParentheses(par), out)

par = ")"
out = 1
console.log(balancedParentheses(par), out)

par = ")("
out = 2
console.log(balancedParentheses(par), out)
