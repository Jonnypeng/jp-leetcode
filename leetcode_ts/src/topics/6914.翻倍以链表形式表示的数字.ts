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

function doubleIt(head: ListNode | null): ListNode | null {
  let maxValStr = "";
  let maxValNum = 1n;
  let p = head;
  while (p) {
    maxValStr += `${p.val}`;
    p = p.next;
  }

  maxValNum = BigInt(maxValStr) * 2n;
  maxValStr = maxValNum.toString();

  p = head;

  for (let i = 0; i < maxValStr.length; i++) {
    if (!p) {
      break;
    }
    const v = maxValStr[i];
    p.val = Number(v);
    if (p.next === null && i !== maxValStr.length - 1) {
      p.next = {
        val: -1,
        next: null
      }
    }
    p = p.next;
  }

  p = null;

  return head;
};