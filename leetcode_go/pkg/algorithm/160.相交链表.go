package algorithm

/*
 * @lc app=leetcode.cn id=160 lang=golang
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	listA := []*ListNode{}
	listB := []*ListNode{}

	m := 0
	n := 0

	for p := headA; p != nil; p = p.Next {
		listA = append(listA, p)
	}

	m = len(listA)

	for p := headB; p != nil; p = p.Next {
		listB = append(listB, p)
	}

	n = len(listB)

	var res *ListNode

	for i := 0; i < m; i++ {
		if res != nil {
			break
		}
		nodeA := listA[i]
		for j := 0; j < n; j++ {
			if res != nil {
				break
			}
			nodeB := listB[j]
			if nodeA == nodeB {
				res = nodeA
			}
		}
	}
	return res
}

// @lc code=end
