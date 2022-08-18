/**
 * @param {string} s
 * @return {number[]}
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
 * Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
 * Return a list of integers representing the size of these parts.


 */
var partitionLabels = function (s) {
	/* 
    * First

    Split string and loop
    build object with 
      key: letter, value: lastIndex
    
    loop again

  */
	let obj = {}
	s.split("").forEach((char, idx) => {
		obj[char] = idx
		// if (obj[char]) {
		// 	obj[char] = idx
		// } else {
		// 	obj[char] = [idx, -1]
		// }
	})
	console.log({ obj })

	let output = [],
		size = 0,
		end = 0
	s.split("").forEach((char, idx) => {
		lastIndex = obj[char]
		end = Math.max(end, lastIndex)
    size++
    if (idx === end) {
      output.push(size)
      size = 0
    }
    // Once the the current idx is the current end, then log the size and start over
	})
  console.log(output)
  
}

let s1 = "ababcbacadefegdehijhklij"
let out1 = [9, 7, 8]
/* Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
 */

let s2 = "eccbbbbdec"
let out2 = [10]

let s3 = "efetytaba"
let out3 = [3, 3, 3]

console.log("TESTING...")
partitionLabels(s1)
// partitionLabels(s2)
// partitionLabels(s3)
//
