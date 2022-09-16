package algorithm

func deleteNode(parentNode *ListNode, node *ListNode) *ListNode {
	nextNode := node.Next
	parentNode.Next = nil
	parentNode.Next = nextNode
	return nextNode
}

func reContruct(head *ListNode) *ListNode {
	p := head
	myHead := head
	start := true
	var parentNode *ListNode
	for p != nil {
		if start {
			if p.Val%2 == 0 {
				p = p.Next
				myHead = p
			} else {
				parentNode = p
				p = p.Next
				start = false
			}
			continue
		}
		if p.Val%2 == 0 {
			p = deleteNode(parentNode, p)
			continue
		}
		parentNode = p
		p = p.Next
	}
	return myHead
}

func ReContruct(head *ListNode) *ListNode {
	return reContruct(head)
}
