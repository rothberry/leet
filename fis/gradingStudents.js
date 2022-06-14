/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * Any grade less than 40 is failing
 */

const gradingStudents = (grades) => {
  // return mapped array of grades with rounded values
  // in loop
    // if the diff between grade and nearest multiple of 5 is less than 3
    // round up to nearest 5
    // if grade is less than 38, no rounding

    return grades.map((grade) => {
    // if (grade < 38 || grade % 5 < 3) {
    //   return grade
    // } else {
    //   return (parseInt(grade / 5) + 1) * 5
    // }
    return testGrade(grade)
  })
}

const testGrade = grade => {
  if (grade < 38 || grade % 5 < 3) {
    return grade
  } else {
    return (parseInt(grade / 5) + 1) * 5
  }
}

// 78 % 5 == 3?
// 78 / 5 without a remainer => 15 + 1 * 5

// const studentsPassed = grades => {

// }

// * TESTING
console.log("TESTING")
let grades = [73, 67, 38, 33],
  ans = [75, 67, 40, 33],
  out = gradingStudents(grades)
console.log("1")
console.log(grades)
console.log({ ans })
console.log({ out })
;(grades = [11, 22, 33, 44, 55, 66, 77, 88, 99]),
  (ans = [11, 22, 33, 45, 55, 66, 77, 90, 100]),
  (out = gradingStudents(grades))
console.log("2")
console.log(grades)
console.log({ ans })
console.log({ out })
