# @param {String} s
# @return {Integer}
# within 1-3999

def roman_to_int(s)
    idx = 0
    result = 0
    while idx < s.length
      if s.slice(idx, 2) === 'IV'
        result += 4
        idx+=1
      elsif s.slice(idx, 2) === 'IX'
        result += 9
        idx+=1
      elsif s.slice(idx, 2) === 'XL'
        result += 40
        idx+=1
      elsif s.slice(idx, 2) === 'XC'
        result += 90
        idx+=1
      elsif s.slice(idx, 2) === 'CD'
        result += 400
        idx+=1
      elsif s.slice(idx, 2) === 'CM'
        result += 900
        idx+=1
      elsif s[idx] === 'I'
        result += 1
      elsif s[idx] === 'V'
        result += 5
      elsif s[idx] === 'X'
        result += 10
      elsif s[idx] === 'L'
        result += 50
      elsif s[idx] === 'C'
        result += 100
      elsif s[idx] === 'D'
        result += 500
      elsif s[idx] === 'M'
        result += 1000   
      end
      idx+=1
    end
    result
end

one = 'III'
two = 'IV'
three = 'IX'
four = 'LVIII'
five = 'MCMXCIV'

# p 'one'
# p roman_to_int(one) # * 3
# p 'two'
# p roman_to_int(two) # * 4
# p roman_to_int(three) # * 9
# p roman_to_int(four) # * 58
p 'five'
p roman_to_int(five) # * 1994