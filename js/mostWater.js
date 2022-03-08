/**
 * !DONE
 * @param {number[]} height
 * @return {number}
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 */
const mostWater1 = (height) => {
  let currentMax = 0
  // brute force
  // loop through the array twice, 
  // while test the min height time the length vs the current max 
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {

      const horz = j - i
      const vert = Math.min(height[i], height[j])
      const area = horz * vert
      area > currentMax ? currentMax = area : null
      console.log({horz: horz, vert: vert, area: area, currentMax: currentMax})
      
    }
  }
  return currentMax
}

const mostWater2 = height => {
  // Start at both ends and move towards the mioddle
  let maxWater = 0
  let i = 0
  let j = height.length - 1
  while (i < j) {
    let len = j - i
    let minHeight = Math.min(height[i], height[j])
    let area = len * minHeight
    maxWater = Math.max(maxWater, area)
    height[i] < height[j] ? i++ : j--
  }
  return maxWater
}

// Testing

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let out = 49
let answer = mostWater2(height)
console.log(answer, out, answer === out)
