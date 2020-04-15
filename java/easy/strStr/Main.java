package easy.strStr;

public class Main {
  public static void main(String[] args) {
    System.out.println(strStr("hello", "ll"));
    System.out.println(strStr("aaaaa", "bba"));
    // System.out.println(strStr("hello", "ll"));
  }

  public static int strStr(String haystack, String needle) {
    int needleLen = needle.length();
    int haystackLen = haystack.length();
    for (int i = 0; i <= (haystackLen - needleLen); i++) {
      if (i + needleLen > haystackLen) {
        break;
      }
      String haySubString = haystack.substring(i, i + needleLen);
      boolean check = haySubString.equals(needle);
      // System.out.println(haySubString + " " + needle + " " + check);
      if (check) {
        return i;
      }
    }
    return -1;
  }

}