package algorithm

import "math"

/*
 * @lc app=leetcode.cn id=654 lang=golang
 *
 * [654] 最大二叉树
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

func makeNode(nums *[]int) *TreeNode {
	// 当数组的值为0，则返回空节点
	if len(*nums) == 0 {
		return nil
	}
	// 找到最大值，左数组，有数组
	maxVal, leftArr, rightArr := findMaxVal(nums)
	return &TreeNode{
		Val:   maxVal,
		Left:  makeNode(&leftArr),
		Right: makeNode(&rightArr),
	}
}

// 查询 最大值，左数组，有数组
func findMaxVal(nums *[]int) (maxVal int, leftArr []int, rightArr []int) {
	val := math.MinInt
	index := -1
	for i, v := range *nums {
		if v > val {
			val = v
			index = i
		}
	}
	return val, (*nums)[:index], (*nums)[index+1:]
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	return makeNode(&nums)
}

// @lc code=end
