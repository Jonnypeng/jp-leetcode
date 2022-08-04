/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head?.next === null) {
    head = null;
    return head;
  }
  if (head?.next.next === null && n === 1) {
    head.next.next = null;
    head.next = null;
    return head;
  }
  if (head?.next.next === null && n === 2) {
    let _head = head.next;
    head = null;
    head = _head;
    return head;
  }

  let prevNode;
  let nextNode;
  let deleteNode;

  let firstNode:any = head;
  let pointer = head;
  let lastNode:any  = null;
  for (let i = 0; i < n; i++) {
    lastNode = pointer;
    pointer = lastNode?.next;
  }

  while (lastNode?.next !== null) {
    prevNode = firstNode;
    firstNode = firstNode.next;
    nextNode = firstNode.next;
    lastNode = lastNode.next;
    deleteNode = firstNode.val;
  }
  if (prevNode?.next) {
    prevNode.next = nextNode;
    prevNode.next = nextNode;
    firstNode = null;
  } else {
    let _firstNode = firstNode.next;
    firstNode = null;
    head = _firstNode;
    return head;
  }


  return head;
};
// @lc code=end

