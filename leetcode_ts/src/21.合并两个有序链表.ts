/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if(l1===null){
         return l2;
     }else if(l2 === null){
         return l1;
     }else  if(l1.val < l2.val){
         l1.next = mergeTwoLists(l1.next,l2);
         return l1;
     }else {
         l2.next = mergeTwoLists(l1,l2.next);
         return l2;
     }
 }
// @lc code=end

