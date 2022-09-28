package algorithm

import "math"

/*
 * @lc app=leetcode.cn id=124 lang=golang
 *
 * [124] 二叉树中的最大路径和
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

func max104(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func maxPathSum(root *TreeNode) int {
	maxSum := math.MinInt32
	var maxGain func(*TreeNode) int
	maxGain = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		leftGain := max104(maxGain(node.Left), 0)
		rightGain := max104(maxGain(node.Right), 0)

		priceNewPath := node.Val + leftGain + rightGain

		maxSum = max104(maxSum, priceNewPath)

		return node.Val + max104(leftGain, rightGain)
	}
	maxGain(root)
	return maxSum
}

// @lc code=end
