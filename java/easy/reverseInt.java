package easy;

public class reverseInt {
  public static void main(String[] args) {
    System.out.println(reverse(123));
  }

  public static int reverse(int x) {
    // 123 => 321

    int output = 0;

    while (x != 0) {
      int digit = x % 10;
      int newOutput = output * 10 + digit;
      System.out.println("digit " + digit);
      System.out.println("newOutput " + newOutput);

      if ((newOutput - digit) / 10 != output) {
        return 0;
      }
      output = newOutput;
      x /= 10;
    }
    return output;

  }
}