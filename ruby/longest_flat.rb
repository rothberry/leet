def longest_flat(array)
  #   hash = {}
    output = []
    i = 0
    while i <= array.length
      cur = array[i]
      counter = 1
      while cur == array[i]
        counter+=1
        print counter
        i+=1
      end
      output.push(counter)
      p output
      i+=1
    end
    
  #   array.each do |x|
  #     if hash[x]
  #       hash[x] += 1
  #     else
  #       hash[x] = 1
  #     end
  #   end
    
    return output.max
    
  end


p 'output: ', longest_flat([1,1,1])
# longest_flat([1,1,2,2,2])
# longest_flat([1,1,2,2,2,2])
# p 'output: ', longest_flat([1,2,2,1,1,1])