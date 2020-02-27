# @param {String} s
# @return {Integer}
# A password is considered strong if below conditions are all met:
# Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.
require 'pry'


def strong_password_checker(s)
  # ? between 6-20 characaters
  # ? 1: lowercase, 1: Uppercase, 1: Digit
  # ? Can't have 3 repeating characters
  # ? Insertion, deletion or replace of any one character are all considered as one change.
  # todo return min num of changes to make password acceptable
  # * ' ' => 32
  # * 0-9 => 48-57
  # * 'A'-'Z' => 65-90
  # * 'a'-'z' => 97-122
  return s.length - 20  if s.length > 20
  return 6 - s.length   if s.length < 6
  
  changes = 0
  check_digit = check_upper = check_lower = 0
  check_repeat = 0
  sArr = s.split("")
  i = j = 0
  while i < sArr.length
    char_ord = s[i].ord
    # print 'char: ', char, '; char_ord: ', char_ord
    # puts ''
    if char_ord.between?(96, 122)
      if check_lower == 0
        s[i] = s[i].upcase
        check_lower = 1
      end
    elsif char_ord.between?(65, 90)
      if check_upper == 0
        s[i] = s[i].downcase
        check_upper = 1
      end
    elsif char_ord.between?(48, 57)
      if check_digit == 0
        check_digit = 1
      end
    end
    i+=1
  end


  changes += (check_digit + check_lower + check_upper)
  # binding.pry
  
  
  changes
end

# p strong_password_checker("") # * 6
# p strong_password_checker('badpassword') # * 1 + 1
# p strong_password_checker('GoodPassword123') # * 0
p strong_password_checker('Aaaa111') # * 2
# p strong_password_checker('aaa111') # * 2
# p strong_password_checker('Itsareallylongbadpassword12345') # * 10
# p strong_password_checker('itsareallylongbadpasswordhomie') # * 10 + 1 + 1
# p strong_password_checker('WaaaaayT0000Mannnny') # * 3 WaayT00Manny
