
[1mFrom:[0m /home/phil/dev/tests/leet/length_of_longest_string.rb @ line 14 Object#length_of_longest_string:

     [1;34m2[0m: [32mdef[0m [1;34mlength_of_longest_string[0m(s)
     [1;34m3[0m:   i = [1;34m0[0m
     [1;34m4[0m:   start_idx = [1;34m0[0m
     [1;34m5[0m:   end_idx = [1;34m1[0m
     [1;34m6[0m:   res_count = [1;34m0[0m 
     [1;34m7[0m:   str_arr = s.split([31m[1;31m"[0m[31m[1;31m"[0m[31m[0m)
     [1;34m8[0m: 
     [1;34m9[0m:   [32mwhile[0m i < str_arr.length 
    [1;34m10[0m:     res_arr = str_arr.slice(start_idx, end_idx)
    [1;34m11[0m:     p res_arr
    [1;34m12[0m:     doesInclude = res_arr.include?(str_arr[end_idx])
    [1;34m13[0m: 
 => [1;34m14[0m:     binding.pry
    [1;34m15[0m: 
    [1;34m16[0m:     [32mif[0m doesInclude
    [1;34m17[0m:       start_idx+=[1;34m1[0m
    [1;34m18[0m:       [32mif[0m res_count < res_arr.length
    [1;34m19[0m:         res_count = res_arr.length
    [1;34m20[0m:       [32mend[0m
    [1;34m21[0m:     [32melse[0m
    [1;34m22[0m:       end_idx+=[1;34m1[0m
    [1;34m23[0m:     [32mend[0m
    [1;34m24[0m:     i+=[1;34m1[0m
    [1;34m25[0m:   [32mend[0m
    [1;34m26[0m:   res_count
    [1;34m27[0m: [32mend[0m

