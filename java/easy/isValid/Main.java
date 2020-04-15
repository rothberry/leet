package easy.isValid;

import java.util.Stack;

public class Main {
  public static void main(String[] args) {
    String test1 = "()";
    String test2 = "()[]{}";
    String test3 = "([)]";
    String test4 = "{[]}";

    System.out.println(isValid(test1));
    System.out.println(isValid(test2));
    System.out.println(isValid(test3));
    System.out.println(isValid(test4));
  }

  public static boolean isValid(String s) {
    Stack<Character> stack = new Stack<Character>();
    for (int i = 0; i < s.length(); i++) {
      char cur = s.charAt(i);
      System.out.println(cur);
      if (cur == '(' || cur == '{' || cur == '[') {
        stack.push(cur);
      } else if (cur == ')' && !stack.empty() && stack.peek() == '(') {
        stack.pop();
      } else if (cur == '}' && !stack.empty() && stack.peek() == '{') {
        stack.pop();
      } else if (cur == ']' && !stack.empty() && stack.peek() == '[') {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.empty();
  }

}
