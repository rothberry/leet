// # @param {String} s
// # @return {Boolean}

function is_number(s) {
  let output = false
  const split_e = s.split("e")
  const front = split_e[0].split(".")

  if (split_e.length > 2) {
    output = false
  }
  if (front > 2) {
    output = false
  }
  return output
}

console.log(is_number("0"))
// "0" => true
console.log(is_number(" 0.1) "))
// " 0.1 " => true
console.log(is_number("abc"))
// "abc" => false
console.log(is_number("1 a)"))
// "1 a" => false
console.log(is_number(" -90e3 "))
// " -90e3   " => true
console.log(is_number(" 1e"))
// " 1e" => false
console.log(is_number("e3"))
// "e3" => false
console.log(is_number("53.5e93)"))
// "53.5e93" => true

// "2e10" => true
// " 6e-1" => true
// " 99e2.5 " => false
// " --6 " => false
// "-+3" => false
// "95a54e53" => false