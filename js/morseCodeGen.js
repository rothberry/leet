/**
 *
 * Takes in a string and output a string of dots and dashes
 */

const codeData = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " ",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----"
}

const morseCoder = str => {
  // Splits string into array of each letter
  const newStr = str.split("")
  let output = []
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].toLowerCase()
    let morseCodeOutput = codeData[newStr[i]]
    // console.log(morseCodeOutput)
    output.push(morseCodeOutput)
  }
  return output.join("")
}

const str1 = "u r a little bitch"
console.log(morseCoder(str1))