/**
 * @param {number} n
 * @return {boolean}
 * Write an algorithm to determine if a number n is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 */

/* 
    *Find pattern?
    n=19
    1^2+9^2=82
    8^2+2^2=68
    36+64=100
    1+0+0=1 true

    n=7
    7^2=49
    16+81=97
    81+49=130
    1+9+0=10
    1 true
   
    n=3
    3^2=9
    9^2=81
    64+1=65
    36+25=61
    36+1=37
    9+49...=56
    25+36=61 => repeating so sad
*/
const isHappy = (n) => {
    // create an obj to track which values we've seen already
    // loop until false
    // for each iteration
    // create a digits arr
    // sum the squares of the digits, and check if it's inside the obj
    // if not, add to obj key and continue looping
    // if it's in the obj, return false
    // if it's 1, return true

    let seenSquares = {}
    while (n > 1) {
        const digs = digits(n)
        const sumOfSquares = digs.reduce((prev, cur) => prev + Math.pow(cur, 2),0)
        if (!!seenSquares[sumOfSquares]) {
            return false
        } else {
            seenSquares[sumOfSquares] = digs
            n = sumOfSquares
        }
        console.log(n)
    }
    return true
}

const digits = (num) => {
	let digitsArr = []
	while (num) {
		digitsArr.unshift(num % 10)
		num = Math.floor(num / 10)
	}
	return digitsArr
}

const digits2 = num => {
    return num.toString().split("").map(x => Number(x))
}

console.clear() 
// console.log(digits2(9999))
console.log(isHappy(19))
console.log(isHappy(7))
console.log(isHappy(3))
