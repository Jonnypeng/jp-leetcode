import { ListNode } from '../type';

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
  if (!head || head.next === null) {
    return head;
  }

  // 可变的位置
  let p: ListNode | null = head;
  // 头节点
  let root: ListNode | null  = null;

  const nodesMap: Array<ListNode | null>[] = [];

  // 将K节点之前的所有节点都推送到数组中
  while (p !== null) {
    let nodes: Array<ListNode | null> = [];
    for (let i = 0; i < k; i += 1) {
      nodes[k - (i + 1)] = p;
      p = p?.next ?? null;
      if (i === k - 1) {
        nodes = nodes.includes(null) ? nodes.reverse() : nodes;
        nodesMap.push(nodes);
      }
    }
  }

  p = head;

  // 遍历已排序的二维数组，将节点重新拼接
  for (let i = 0; i < nodesMap.length; i += 1) {
    for (let j = 0; j < nodesMap[i].length; j += 1) {
      if (nodesMap[i][j]) {
        (nodesMap[i][j] as ListNode).next = null;
        if (i === 0 && j === 0) {
          root = nodesMap[i][j];
        }
        if (p) {
          p.next = nodesMap[i][j];
          p = nodesMap[i][j];
        }
      }
    }
  }

  return root;

  // 遍历已排序的二维数组，将节点重新拼接
  for (let i = 0; i < nodesMap.length; i += 1) {
    for (let j = 0; j < nodesMap[i].length; j += 1) {
      if (nodesMap[i][j]) {
        (nodesMap[i][j] as ListNode).next = null;
        if (i === 0 && j === 0) {
          root = nodesMap[i][j];
        }
        if (p) {
          p.next = nodesMap[i][j];
          p = nodesMap[i][j];
        }
      }
    }
  }

  return root;

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
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null
              }
            }
          }
        }
      }
    }
  }
}

const k1 = 2;
const k2 = 3;

const r = reverseKGroup(l1, 5)
console.log(r);
