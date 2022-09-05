/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

 function swapPairs(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null){
      return head;
  }

  const arrBox:ListNode[][] = [];
  let bomb:ListNode = new ListNode(-1);
  let bombT: ListNode  = bomb;
  let curPoint: ListNode = head;

  let onlyNode: ListNode|null = null;

  const exeBox = (box: any) => {
      bombT.next = box.pop();
      const tempNext = box.pop();
      tempNext.next = null;
      bombT.next.next = tempNext;
      bombT = bombT.next.next;
  }

  const createArrBox = (i: number) => {
      arrBox[i] = [];
      arrBox[i].push(curPoint); 
      arrBox[i].push(curPoint.next); 
      if(curPoint.next.next===null){
          exeBox(arrBox[i]);
          return;
      }
      if(curPoint.next.next.next === null){
          onlyNode = curPoint.next.next;
          exeBox(arrBox[i]);
          return;
      }
      curPoint = curPoint.next.next;
      exeBox(arrBox[i]);
      createArrBox(i+1); 
  }

  createArrBox(0);

  if(onlyNode!==null){
      bombT.next = onlyNode;
  }

  bomb = bomb.next;

  return bomb;
};
// @lc code=end

