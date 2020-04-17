package easy;

public class addTwoNumbers {
  public static void main(String[] args) {
    ListNode test1 = new ListNode(2);
    test1.next = new ListNode(4);
    test1.next.next = new ListNode(3);
    ListNode test2 = new ListNode(5);
    test2.next = new ListNode(6);
    test2.next.next = new ListNode(4);
    printList(test1);
    printList(test2);

  }

  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode output = new ListNode(0);
    return new ListNode(0);
  }

  public static void printList(ListNode listNode) {
    System.out.print(listNode.val + "----->\t");
    System.out.print(listNode.next.val + "----->\t");
    System.out.println(listNode.next.next.val);
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}
