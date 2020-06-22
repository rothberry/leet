# @param {String} s
# @return {Boolean}

def is_number(s)
  # Takes in string, remove all leading and following spaces
  # can only have 1 decimal pt, e, & +/-;
  # split by "e" or "."
  # first check for multiple 
  # e_check = d_check = n_check = false
  # for c in s.chars do
  #   if c == 'e'
  #     if e_check
  #       return false
  #     else
  #       e_check = !e_check
  #     end
  #   elsif c == '.'
  #     if d_check
  #       return false
  #     else
  #       d_check = !d_check
  #     end
  #   elsif c == '+' || c == '-'
  #     if n_check
  #       return false
  #     else
  #       n_check = !n_check
  #     end
  #   end
  # end
  output = false
  s.strip!
  split_e = s.split("e")
  if split_e.length < 3
    front = split_e[0].split(".")
    if front.length < 3
      front.any? {|n| digit?(n)}
    end

  end

  # output
end

def digit?(s)
  ('0'..'9').include?(s)
end

p is_number("0")
# "0" => true
p is_number(" 0.1 ")
# " 0.1 " => true
p is_number("abc")
# "abc" => false
p is_number("1 a")
# "1 a" => false
p is_number(" -90e3 ")
# " -90e3   " => true
p is_number(" 1e")
# " 1e" => false
p is_number("e3")
# "e3" => false
p is_number("53.5e93")
# "53.5e93" => true

# "2e10" => true
# " 6e-1" => true
# " 99e2.5 " => false
# " --6 " => false
# "-+3" => false
# "95a54e53" => false