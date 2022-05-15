/*
 * @Author: 彭江
 * @Date: 2022-05-14 08:57:31
 * @LastEditors: 彭江
 * @LastEditTime: 2022-05-15 12:17:21
 */
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

const swap = (aNode: ListNode, bNode: ListNode) => {
  const startNext = aNode.next;
  const endNext = bNode.next;
  if (startNext === bNode) {
    aNode.next = endNext;
    bNode.next = aNode;
  } else {
    aNode.next = endNext;
    bNode.next = startNext;
  }
  return startNext;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return head;
  }

  let p:ListNode | null = head;
  const nodesMap: Array<ListNode|null>[] = [];

  // 将K节点之前的所有节点都推送到数组中
  while (p !== null) {
    let nodes:Array<ListNode|null> = [];
    for (let i = 0; i < k; i += 1) {
        nodes[k-i] = p;
        p = p?.next ?? null;
        if(i === k -1){
          nodes = nodes.includes(null) ? nodes.reverse() : nodes;
          nodesMap.push(nodes);
        }
    }
  }

  console.log(nodesMap);

  return head;



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
            val:6,
            next:{
              val:7,
              next:{
                val:8,
                next:null
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

const r = reverseKGroup(l1, 3)
console.log(r);
