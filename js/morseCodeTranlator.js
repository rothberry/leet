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

const morseCodeTranlator = str => {
  let output = ""
  const newStr = str.split("")
  let i = 0
  let tempLetter = ""
  while (i < newStr.length) {
    console.log(newStr[i])
    i++
  }
}

const str =
  "-.---..--.....--.--..-..-.--....--.--..-.--.-.....--.-......-....-......-...-.-......-.--.--.--"
// * output = no im simply saying that life uh finds a way

const str1 = "..-.-..-.-....--.-...-.....--.-....."
// * output1 = u r a little bitch

// console.log(morseCodeTranlator(str))
console.log(morseCodeTranlator(str1))
