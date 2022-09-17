package algorithm

/*
 * @lc app=leetcode.cn id=61 lang=golang
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	// 边界守护
	if head == nil {
		return head
	}
	// 存储节点头，节点头的Next都是nil，避免处理环
	headList := []*ListNode{}
	// 节点list的长度
	n := 0
	// 节点的指针
	p := head
	// 计数器，计算处理结束
	count := 1
	// 应该处理的长度，因为当处理的次数与总长度相等时，会出现周期性的循环，所以应处理次数为 k%n，只求余数即可
	totalCount := 0

	// 将节点放入list
	for p != nil {
		headList = append(headList, p)
		pNext := p.Next
		p.Next = nil
		p = pNext
		n++
	}

	totalCount = k % n
	p = head

	// 先将数组进行选装，不处理节点
	for count <= totalCount {
		headList = append(headList[n-1:], headList[0:n-1]...)
		count++
	}

	// 连接处理的节点
	for i := 0; i < n; i++ {
		if i == n-1 {
			headList[i].Next = nil
			continue
		}
		headList[i].Next = headList[i+1]
	}

	head = headList[0]

	return head
}

// @lc code=end

func RotateRight(head *ListNode, k int) *ListNode {
	return rotateRight(head, k)
}
