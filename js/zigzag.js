/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const sArr = s.split("")
  const rowsArr = []
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr.length; j++) {
      rowsArr.push
      // rowsArr.push([])
      // console.log(rowsArr)
    }
  }
}

// console.log(convert("ABCDEFGHIJK", 1))
// // * ABCDEFGHIJK
console.log(convert("ABCDEFGHIJK", 2))
// A-C-E-G-I-K-
// -B-D-F-H-J--
// * ABCDEFGHIJK
console.log(convert("ABCDEFGHIJK", 3))
// A---E---I---
// -B-D-F-H-J--
// --C---G---K-
// * AEIBDFHJCGK
console.log(convert("ABCDEFGHIJK", 4))
// A*****G*****
// *B***F*H***I
// **C*E***I*K*
// ***D*****J**
// * AGBFHCEIKDJ
console.log(convert("ABCDEFGHIJK", 5))
// A-------I---
// -B-----H-J--
// --C---G---K-
// ---D-F------
// ----E-------
// * AGBFHCEIKDJ
