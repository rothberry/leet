# @param {String} address
# @return {String}
# ? Given a valid (IPv4) IP address, return a defanged version of that IP address.
# ? A defanged IP address replaces every period "." with "[.]".

def defang_i_paddr(address)
  address.split(".").join("[.]")
end

p defang_i_paddr("1.1.1.1")
# Output: "1[.]1[.]1[.]1"

# p defang_i_paddr("255.100.50.0")