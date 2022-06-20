# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    # Needs to be destructive
    # Start by comparing the current and next element
    # then they are equal, remove the current
    i = 0
    while i < nums.length 
        cur = nums[i]
        nxt = nums[i + 1]
        if cur == nxt
            nums.delete_at(i)
            # push blank value onto end of array
        else
            i+=1
        end
        p nums
        # nums[i] == nums[i+1] ? nums.delete_at(i) : i += 1
    end
    return nums#.length
end


arr1 = [1, 1, 2]
# => return 2
# => [1,2]
arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
# => return 5
# => [0,1,2,3,4]
arr3 = [0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6]

p remove_duplicates(arr1)
p remove_duplicates(arr2)
p remove_duplicates(arr3)
