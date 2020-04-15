package easy.rotateArray;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;

public class Main {
  public static void main(String[] args) {
    int[] test1 = { 1, 2, 3, 4, 5, 6, 7 };
    // int[] test2 = {1,2,3,4,5,6,7};
    // Input: [1,2,3,4,5,6,7] and k = 3
    // Output: [5,6,7,1,2,3,4]
    // System.out.println(rotate(test1, 3));
    rotate(test1, 3);

  }

  public static void rotate(int[] nums, int k) {
    int numLen = nums.length;
    int axis = numLen - 3;
    int[] outArr = new int[numLen];
    for (int i = 0; i < numLen; i++) {
      if (axis >= numLen) {
        axis = 0;
      }
      outArr[i] = nums[axis];
      axis++;
    }
    System.out.println(Arrays.toString(nums));
    System.out.println(Arrays.toString(outArr));
  }
}