/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// @lc code=start
//  Definition for singly-linked list.



function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const listNodeToString = (node: ListNode | null, sum: string):string => {
    if (!node) {
      return sum;
    }
    sum = `${node.val}${sum}`;
    return listNodeToString(node.next, sum);
  }

  const getRevSum = (lStr: string, rStr: string) => {
    let sum: BigInt = BigInt(lStr) + BigInt(rStr);
    let _sumStr = sum.toString();
    let str = "";
    for (let i = 0; i < _sumStr.length; i++) {
      str = `${_sumStr[i]}${str}`;
    }
    return str;
  }

  const grenListNode = (mySumStr: string, index: number, node: ListNode) => {
    if (!mySumStr[index]) {
      return;
    }
    node.next = new ListNode(Number(mySumStr[index]));
    grenListNode(mySumStr, index + 1, node.next);

  }


  const l1Str = listNodeToString(l1, '');
  const l2Str = listNodeToString(l2, '');
  const sumStr = getRevSum(l1Str, l2Str);

  const root = new ListNode();
  root.val = Number(sumStr[0]);
  grenListNode(sumStr, 1, root);

  return root;
};
// @lc code=end

