/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let p = head;
  let snoke = {
    val: -1,
    next: p
  }
  let prev = snoke;
  while (p) {
    if (p.next === null) {
      if (p.val === val) {
        prev.next = null;
      }
      break;
    }
    if (p.val === val) {
      prev.next = p.next;
    } else {
      prev = p;
    }
    p = prev.next;
  }
  return snoke.next;
};
// @lc code=end


