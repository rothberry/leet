/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  let skillsObj = {}

  req_skills.forEach(req_skill => {
    skillsObj[req_skill] = []
    people.forEach((people_skill, idx) => {
      if (people_skill.includes(req_skill)) {
        skillsObj[req_skill].push(idx)
      }
    })
  })
  // loop through object making all combinations
  // or find people to remove
  
  return skillsObj
}

console.log(smallestSufficientTeam([1, 2, 3], [[1], [2], [2, 3]]))
// console.log(
//   [1, 2, 3, 4, 5, 6],
//   [
//     [1, 2, 3],
//     [1, 2, 4],
//     [3, 5, 6],
//     [3, 5, 6],
//     [4, 5],
//     [5, 2],
//     [6, 3]
//   ]
// )

// req_skills = ["java","nodejs","reactjs"]
// people = [["java"],["nodejs"],["nodejs","reactjs"]]
// Output: [0,2]

// let req_skills = ["algorithms", "math", "java", "reactjs", "csharp", "aws"]
// let people = [
//   ["algorithms", "math", "java"],
//   ["algorithms", "math", "reactjs"],
//   ["java", "csharp", "aws"],
//   ["reactjs", "csharp"],
//   ["csharp", "math"],
//   ["aws", "java"]
// ]
// Output: [1,2]
