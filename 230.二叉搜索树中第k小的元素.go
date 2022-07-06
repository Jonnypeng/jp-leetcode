package jp_leetcode

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/*
 * @lc app=leetcode.cn id=230 lang=golang
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// 深度优先搜索
func dfs(node *TreeNode, res *[]int) {
	if node == nil {
		return
	}
	// 优先将最小值进行入栈
	dfs(node.Left, res)
	*res = append(*res, node.Val)
	// 其次将较大值进入入栈
	dfs(node.Right, res)
}

func kthSmallest(root *TreeNode, k int) int {
	var res []int = []int{}
	dfs(root, &res) // 得到升序数组
	return res[k-1]
}

// @lc code=end

// func main() {
// 	kthSmallest({
// 		Val:1,
// 		Left:{

// 		}
// 	})
// }
