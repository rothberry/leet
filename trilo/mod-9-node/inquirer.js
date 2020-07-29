const inquirer = require("inquirer")
const fs = require("fs")

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is you name?",
  },
  {
    type: "list",
    name: "contact",
    message: "What is your contact?",
    choices: ["email", "phone", "slack", "smoke signal"],
  },
  {
    type: "checkbox",
    name: "stack",
    message: "What languages do you know?",
    choices: ["java", "javascript", "ruby", "html", "css", "sql"],
  },
]

inquirer.prompt(questions).then((answers) => {
  console.log(answers)
  const fileName =
    answers.name
      .toLowerCase()
      .split(" ")
      .join("") + ".json"
  fs.writeFile(fileName, JSON.stringify(answers, null, '\t'), (err) => {
    if (err) throw err
  })
  console.log("Success!")
})
