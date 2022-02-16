from multiprocessing.dummy import Array


def reverse_string(str):
  arr = []
  i = str.length
  while i > 0:
    arr.append(str[i])
    i = i - 1
  return arr
  

print(reverse_string("asd"))