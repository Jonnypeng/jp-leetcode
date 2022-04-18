/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */



// @lc code=start
//  Definition for singly-linked list.



function fillArr(n: number, myList: string[]) {
  for (let i = 0; i < n; i++) {
    myList.unshift('0');
  }
}

function addSum(a: string, b: string): string {
  let pa = a.length;
  let pb = b.length;
  let aList: string[] = Array.from(a);
  let bList: string[] = Array.from(b);
  const result: string[] = [];
  let p = [];

  if (pa > pb) {
    fillArr(pa - pb, bList);
  } else {
    fillArr(pb - pa, aList);
  }

  for (let i = aList.length - 1; i >= 0; i--) {
    let an = Number(aList[i]);
    let bn = Number(bList[i]);
    let v = 0;
    const pn = p.length > 0 ? p.pop() : 0;
    if (an + bn + pn === 10) {
      v = 0;
      p.push(1);
    } else if (an + bn + pn >= 11) {
      v = (an + bn + pn) % 10;
      p.push(Math.floor((an + bn + pn) / 10));
    } else {
      v = an + bn + pn;
    }
    result.unshift(v.toString());
  }
  if (p.length > 0) {
    result.unshift(p.pop().toString());
  }
  return result.join('');

};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const listNodeToString = (node: ListNode, sum: string) => {
    if (!node) {
      return sum;
    }
    sum = `${node.val}${sum}`;
    return listNodeToString(node.next, sum);
  }

  const getRevSum = (lStr: string, rStr: string) => {
    let sum = addSum(lStr, rStr);
    let _sumStr = sum;
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

  console.log(sumStr);
  return root;
};
// @lc code=end

