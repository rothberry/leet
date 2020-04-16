package easy;

import java.util.Arrays;

public class removeDuplicates {
  public static void main(String[] args) {
    int[] first = { 1, 1, 2 };
    int[] second = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
    System.out.println(removeDups(first));
    System.out.println(removeDups(second));
  }

  public static int removeDups(int[] nums) {
    int outLength = nums.length;
    for (int i = 0; i < nums.length - 1; i++) {
      int cur = nums[i];
      int next = nums[i + 1];
      if (cur == next) {
        outLength--;
      }
    }
    System.out.println(Arrays.toString(nums));
    return outLength;
  }

}