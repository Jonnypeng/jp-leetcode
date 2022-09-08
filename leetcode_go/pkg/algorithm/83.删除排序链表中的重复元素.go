package algorithm

import "leetcode/pkg/l_types"

type ListNode = l_types.ListNode

/*
 * @lc app=leetcode.cn id=83 lang=golang
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	// func DeleteDuplicates(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	finsed := false
	p := head

	for !finsed {
		prevNode := p
		p = p.Next
		if p.Val == prevNode.Val {
			nextNode := p.Next
			prevNode.Next = nextNode
			p = prevNode
		}
		if p.Next == nil {
			finsed = true
		}
	}

	return head

}

// @lc code=end
