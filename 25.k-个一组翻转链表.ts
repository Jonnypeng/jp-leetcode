import { ListNode } from './type';

/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const root: ListNode = {
    val: -1,
    next: head
  }

  if(k===1){
    return head;
  }

  const exe = (preNode: ListNode, node: ListNode | null) => {
    const nodes: ListNode[] = [];
    let startNext: ListNode | null = null;
    let endNext: ListNode | null = null;


    for (let i = 0; i < k; i++) {
      if (node) {
        nodes.push(node);
        node = node.next;
      }
    }

    if (nodes.length === k && k > 2) {
      startNext = nodes[0].next;
      endNext = nodes[k - 1].next;

      nodes[0].next = null;
      nodes[k - 1].next = null;

      preNode.next = nodes[k - 1];
      nodes[k - 2].next = nodes[0];

      nodes[k - 1].next = startNext;
      nodes[0].next = endNext;

      if (endNext) {
        exe(nodes[0], endNext);
      }
    }else if(nodes.length === k && k === 2){
      endNext = nodes[1].next;

      nodes[0].next = null;
      nodes[1].next = null;

      preNode.next = nodes[1];
      nodes[1].next = nodes[0];
      nodes[0].next = endNext;

      if (endNext) {
        exe(nodes[0], endNext);
      }
    }

  }

  exe(root, head);

  return root.next;

};
// @lc code=end

// test

const l1: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

const k1 = 2;
const k2 = 3;

const r = reverseKGroup(l1, k1)
console.log(r);
