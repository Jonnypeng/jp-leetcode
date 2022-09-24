package algorithm

import "sort"

/*
 * @lc app=leetcode.cn id=148 lang=golang
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func sortList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	sortList := []int{}
	p1 := head
	p2 := head
	finshed := false

	for !finshed {
		sortList = append(sortList, p1.Val)
		if p1.Next == nil {
			finshed = true
			p1.Next = &ListNode{
				Val:  -1,
				Next: nil,
			}
			p1 = p1.Next
			continue
		}
		p1 = p1.Next
	}

	sort.Ints(sortList)

	p2 = p1

	for i, v := range sortList {
		p2.Val = v
		if i < len(sortList)-1 {
			p2.Next = &ListNode{
				Val:  -1,
				Next: nil,
			}
		} else {
			p2.Next = nil
		}
		p2 = p2.Next
	}

	return p1
}

// @lc code=end

func SortList(head *ListNode) *ListNode {
	return sortList(head)
}
