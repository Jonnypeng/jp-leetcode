package algorithm

/*
 * @lc app=leetcode.cn id=104 lang=golang
 *
 * [104] 二叉树的最大深度
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

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	} else {
		return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
	}
}

// @lc code=end
