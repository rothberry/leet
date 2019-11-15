/*
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = points => {
  // * Given array points
  // * Objective to find X coordinate that intersects the most ranges
  // TODO
  // * Find min and max points
  let minVal = points[0][0]
  let maxVal = points[0][1]
  for (let i = 0; i < points.length; i++) {
    const eleMin = points[i][0]
    const eleMax = points[i][1]
    eleMin < minVal ? minVal = eleMin : null
    eleMax > maxVal ? maxVal = eleMax : null
    // console.log(minVal,maxVal)
  }
  // * for range of min to max
  // * loop through array count if X is in range
  let resArr = []
  for (let x = minVal; x <= maxVal; x++){
    let counter = 0
    points.forEach( point => {
      let rangeCheck = point[0] <= x && point[1] >= x
      rangeCheck ? counter+=1 : null
    })
    resArr.push(counter)
  }
  // console.log(resArr)
  let result = 0
  resArr.forEach(ele => {
    ele > result ? result = ele : null
  })
  return result
}

const one = [[10, 16], [2, 8], [1, 6], [7, 12]] //? Output: 2 arrows
const two = [[1, 2], [3, 4], [5, 6], [7, 8]] //? Output: 4 arrows

console.log(findMinArrowShots(one))
console.log(findMinArrowShots(two))
