package main

import "leetcode/pkg/algorithm"

type TreeNode = algorithm.TreeNode

func main() {
	algorithm.FindDuplicateSubtrees(&TreeNode{
		Val:   1,
		Left:  nil,
		Right: nil,
	})
}
