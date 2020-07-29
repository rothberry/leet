const fs = require("fs")
const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question("What do you think of Node.js? ", (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`)

//   rl.close()
// })

const writeStuff = () => {
  fs.writeFile(process.argv[2], process.argv[3], (err) => {
    if (err) throw err
    console.log("Done!")
  })
}

const readStuff = () => {
  fs.readFile(process.argv[2], "utf-8", (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

writeStuff()
readStuff()
