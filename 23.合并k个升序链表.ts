/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

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


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let start: boolean = true;

  const root: ListNode = {
    val: -1,
    next: null
  };

  let myNode: ListNode | null = null;

  while (lists.some(node => node !== null)) {
    let minNode: ListNode = {
      val: Number.MAX_VALUE,
      next: null
    };
    let minIndex: number = 0; // 最小的索引
    let emptyIndex: number = lists.indexOf(null);
    if(emptyIndex!==-1){
      lists.splice(emptyIndex,1);
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] === null) {
        continue;
      }
      let node = (lists[i] as ListNode);
      if (node.val <= minNode.val) {
        minNode = node;
        minIndex = i;
      }
      if (i === lists.length - 1) {
        let tempMyNode = myNode;
        myNode = lists[minIndex] as ListNode;
        // myNode.next = null;
        if (tempMyNode) {
          (tempMyNode as ListNode).next = myNode;
        }
        lists[minIndex] = (lists[minIndex] as ListNode).next;
        minNode = {
          val: Number.MAX_VALUE,
          next: null
        };
        if (start) {
          start = false;
          root.next = myNode;
        }
      }
    }
  }
  return root.next;
};
// @lc code=end


// test
const case1 = [
  {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  },
  {
    val: 2,
    next: {
      val: 6,
      next: null
    }
  }
];

const case2 = [
  {
    val:1,
    next:null
  },
  {
    val:0,
    next:null
  }
]
mergeKLists(case2)