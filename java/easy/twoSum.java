package easy;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class twoSum {
  public static void main(String[] args) {
    // Given nums = [2, 7, 11, 15], target = 9,
    // Because nums[0] + nums[1] = 2 + 7 = 9,
    // return [0, 1].
    int[] numsOne = { 2, 7, 11, 15 };
    int[] numsTwo = { 3, 2, 4 };
    int[] numsThree = { 3, 3 };
    int[] numsFour = { -1, -2, -3, -4, -5 };
    System.out.println(Arrays.toString(twoSum(numsOne, 9)));
    System.out.println(Arrays.toString(twoSum(numsOne, 27)));
    System.out.println(Arrays.toString(twoSum(numsTwo, 6)));
    System.out.println(Arrays.toString(twoSum(numsThree, 6)));
    System.out.println(Arrays.toString(twoSum(numsFour, -8)));

  }

  public static int[] twoSum(int[] nums, int target) {

    Map<Integer, Integer> mapChecker = new HashMap<Integer, Integer>();
    int numLen = nums.length;

    for (int i = 0; i < numLen; i++) {
      // If there is a key with the current index then 
      // return it's value index as well current val index
      if (mapChecker.containsKey(nums[i])) {
        int left = mapChecker.get(nums[i]);
        return new int[] { left + i, i + 1 };
      } 
      // if it doesn't exist, create a key and val with the diff and index.
      else {
        mapChecker.put(target - nums[i], i);
      }
    }
    return new int[2];

  }
}