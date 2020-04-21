# @param {String} s
# @return {String}

VOWELS = ['a', 'e', 'i', 'o', 'u']

def reverse_vowels(s)
  # vowels = []
  # s.chars.each do |x|
  #     vowel_check = VOWELS.include?(x)
  #     if vowel_check
  #       vowels.push(x)
  #     end
  #   end
  vowels = s.scan(/[aeiou]/i)
  return s.gsub(/[aeiou]/i) {vowels.pop()}

end

p reverse_vowels("hello")
# "holle"
p reverse_vowels("leetcode")
# "leotcede"