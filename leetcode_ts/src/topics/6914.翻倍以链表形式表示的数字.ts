


/***
 * 6914. 翻倍以链表形式表示的数字 显示英文描述 
 * https://leetcode.cn/contest/weekly-contest-358/problems/double-a-number-represented-as-a-linked-list/
通过的用户数583
尝试过的用户数762
用户总通过次数583
用户总提交次数997
题目难度Medium
给你一个 非空 链表的头节点 head ，表示一个不含前导零的非负数整数。

将链表 翻倍 后，返回头节点 head 。

 

示例 1：


输入：head = [1,8,9]
输出：[3,7,8]
解释：上图中给出的链表，表示数字 189 。返回的链表表示数字 189 * 2 = 378 。
示例 2：


输入：head = [9,9,9]
输出：[1,9,9,8]
解释：上图中给出的链表，表示数字 999 。返回的链表表示数字 999 * 2 = 1998 。
 

提示：

链表中节点的数目在范围 [1, 104] 内
0 <= Node.val <= 9
生成的输入满足：链表表示一个不含前导零的数字，除了数字 0 本身。
 * 
 * 
 * 
 * 
 */


interface ListNode {
  val: number
  next: ListNode | null
}

function doubleIt(head: ListNode | null): ListNode | null {
  let maxValStr = "";
  let maxValNum = 1;
  let p = head;
  while (p) {
    maxValStr += `${p.val}`;
    p = p.next;
  }

  maxValNum = Number(maxValStr) * 2;
  maxValStr = `${maxValNum}`;

  if (/e/.test(maxValStr)) {
    let arr = maxValStr.split('e+');
    let head = arr[0];
    maxValStr = head;
    // let tail = Math.pow(10, Number(arr[1]))
    for (let i = 0; i < Number(arr[1]); i++) {
      maxValStr += '0';
    }
    console.log(arr)
  }

  console.log(maxValNum, maxValStr);

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

doubleIt({
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9
      , next: null
    }
  }
})