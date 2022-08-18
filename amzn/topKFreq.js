/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * Given an array of strings words and an integer k, return the k most frequent strings.
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 */

const topKFrequent = (words, k) => {
	const obj = {}

	// TODO instead of building just an obj, build a heap
	words.forEach((word) => {
		obj[word] ? (obj[word] += 1) : (obj[word] = 1)
	})

	// sort obj by max value, return obj as array of length k just the keys
	return Object.entries(obj)
		.sort((a, b) => b[1] - a[1])
		.map((x) => x[0])
		.slice(0, k)
}

const words1 = ["i", "love", "leetcode", "i", "love", "coding"],
	k1 = 2
const out1 = ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

const words2 = [
		"the",
		"day",
		"is",
		"sunny",
		"the",
		"the",
		"the",
		"sunny",
		"is",
		"is",
	],
	k2 = 4
const out2 = ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

console.log("TESTING...")
console.log("1")
console.log(topKFrequent(words1, k1))
console.log("2")
console.log(topKFrequent(words2, k2))
