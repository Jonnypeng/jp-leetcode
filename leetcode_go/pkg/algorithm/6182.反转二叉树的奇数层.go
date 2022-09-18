package algorithm

import (
	"math"
)

// 解题思路
// 1.层序遍历
// 2.设置记数器，计数器<=2^层数
// 3.将数据推送到临时数组，当层数增加时候，且为奇数时，进行翻转
// 4.将翻转过的数组按照2n+1，2n+2进行数组与树的转换

/*
 * @lc app=leetcode.cn id=6182 lang=golang
 *
 * [6182] 反转二叉树的奇数层
 */

// @lc code=start

// 旋转数组
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

// 层序遍历与计算
func layerSearch(node *TreeNode) *TreeNode {
	head := node              // 存储头
	list := []*TreeNode{node} // 用于层序遍历的队列
	ans := []*TreeNode{}      // 用于批量翻转的数组
	count := 0                // 计数器，每遍历1步就+1
	maxCount := 0             // 最大记数，也是层数，maxCount是2的指数,x^maxCount等于每层的数量，当count自增等于这个数量，指数自增1

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
