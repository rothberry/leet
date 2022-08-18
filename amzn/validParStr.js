/**
 * @param {string} s
 * @return {boolean}
 * Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
 * The following rules define a valid string:
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 */

var checkValidString = function (s) {
	/* 
    functions the same as without the wildcard, but now need to hold onto TWO var and check if EITHER is 0 at the end
  */

	let assumeOpen = 0,
		assumeClosed = 0
	s.split("").forEach((char) => {
		// Conditions:
		if (char === "(") {
      // If open, then inc BOTH by 1
      assumeOpen++
			assumeClosed++
		} else if (char === ")") {
      // If closed, then dec BOTH by 1
      assumeOpen--
			assumeClosed--
		} else {
      // If wildcard, then inc Open by 1, dec Closed by 1
			assumeOpen++
			assumeClosed--
		}

    // if our open assumptions every goes negative, then it can't recover, thus returning false
    if (assumeOpen < 0) {
      return false
    }
    // Need to correct the assumeClosed if it goes below zero because we would just not choose the closed
		if (assumeClosed < 0) {
			assumeClosed = 0
		}
        
		console.log({ assumeClosed, assumeOpen })
	})

	// console.log({ assumeClosed, assumeOpen })
	return assumeClosed === 0
}

let s1 = "()"
// Output: true
let s2 = "(*)"
// Output: true
let s3 = "(*))"
// Output: true
let s4 = "))(("
// Output: false
let s5 = "(*)("
// Output: false

console.log("TESTING...")
console.log(checkValidString(s1))
console.log(checkValidString(s2))
console.log(checkValidString(s3))
console.log(checkValidString(s4))
console.log(checkValidString(s5))
