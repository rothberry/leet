package easy;

public class mergeTwoSortedList {
  public static void main(String[] args) {
    ListNode test1 = new ListNode(1);
    test1.next = new ListNode(2);
    test1.next.next = new ListNode(4);
    ListNode test2 = new ListNode(1);
    test2.next = new ListNode(3);
    test2.next.next = new ListNode(4);
    // printList(test1);
    // printList(test2);
    printList(mergeTwoLists(test1, test2));

  }

  public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    // ListNode mergedList = new ListNode(0);
    // boolean proceed = true;
    // int i = 0, j = 0;
    // printList(l1);
    // printList(l2);
    // System.out.println("l1\t" + l1.val);
    // System.out.println("l2\t" + l2.val);
    if (l1 == null)
      return l2;
    if (l2 == null)
      return l1;
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }

  }

  public static void printList(ListNode listNode) {
    System.out.print(listNode.val + "----->\t");
    System.out.print(listNode.next.val + "----->\t");
    System.out.println(listNode.next.next.val);
  }
}
