/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

 
 */
var wordBreak = function (s, wordDict) {}

let s1 = "leetcode"
let wordDict1 = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as"leet code".

let s2 = "applepenapple"
let wordDict2 = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmentedas "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

let s3 = "catsandog"
let wordDict3 = ["cats", "dog", "sand", "and", "cat"]
// Output: false

let s4 = "applepenapples"
let wordDict4 = ["apple", "pen", "apples"]

console.clear()

console.log(wordBreak(s1, wordDict1))
// console.log(wordBreak(s2, wordDict2))
// console.log(wordBreak(s3, wordDict3))
// console.log(wordBreak(s4, wordDict4))
// console.log(wordBreak(s5, wordDict5))
// console.log(wordBreak(s6, wordDict6))
