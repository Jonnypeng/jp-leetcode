package algorithm

import (
	"math"
)

/*
 * @lc app=leetcode.cn id=6182 lang=golang
 *
 * [6182] 反转二叉树的奇数层
 */

// @lc code=start

func rotateArr(arr []*TreeNode) []*TreeNode {
	n := len(arr)
	left, right := 0, n-1
	for left < right {
		arr[left], arr[right] = arr[right], arr[left]
		left++
		right--
	}
	return arr
}

func layerSearch(node *TreeNode) *TreeNode {
	head := node
	list := []*TreeNode{node}
	ans := []*TreeNode{}
	count := 0
	maxCount := 0

	tempAns := []*TreeNode{}

	for len(list) > 0 {
		p := list[0]
		list = list[0+1:]

		tempAns = append(tempAns, p)

		count++
		if count == int(math.Pow(2.0, float64(maxCount))) {
			count = 0
			if maxCount%2 != 0 {
				tempAns = rotateArr(tempAns[0:])
			}
			maxCount++
			ans = append(ans, tempAns[0:]...)
			tempAns = []*TreeNode{}
		}

		if p.Left != nil {
			list = append(list, p.Left)
		}

		if p.Right != nil {
			list = append(list, p.Right)
		}

	}

	n := len(ans)

	for i := 0; i < n; i++ {
		if 2*i+2 > n-1 {
			break
		}
		ans[i].Left = ans[2*i+1]
		ans[i].Right = ans[2*i+2]
	}

	return head
}

func reverseOddLevels(root *TreeNode) *TreeNode {
	head := layerSearch(root)
	return head
}

// @lc code=end

func ReverseOddLevels(root *TreeNode) *TreeNode {
	return reverseOddLevels(root)
}
