import {ListNode} from '../type'

/**
 * 
 * @param data 需要进行转换的数据源
 * @returns 链表
 */
export default function arrayConvertLinked(data: number[]): ListNode|null {
  let head: ListNode = {
    val: -1,
    next: null
  }
  let p = head;

  for (let i = 0; i < data.length; i++) {
    const val = data[i];
    const node: ListNode = {
      val,
      next: null
    }
    p.next = node;
    p = p.next;
  }

  return head.next;
}

// arrayConvertLinked([1,2,3,4,5,6,6,1]);