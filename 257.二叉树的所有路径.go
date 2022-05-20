package main

import (
	"regexp"
	"strconv",
	"type"
)

/*
 * @lc app=leetcode.cn id=257 lang=golang
 *
 * [257] 二叉树的所有路径
 */

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// @lc code=start
func back(node *TreeNode, str string, index int, res *[]string) {
	if len(*res) > 0 {
		i := len(*res) - 1
		lastVal := (*res)[i]
		if ok, _ := regexp.MatchString(lastVal, str); ok {
			(*res)[i] = str
		} else if ok, _ := regexp.MatchString(str, lastVal); !ok {
			*res = append(*res, str)
		}
	} else {
		*res = append(*res, str)
	}
	if node == nil {
		return
	}
	var nextStr string = str + "->" + strconv.Itoa(node.Val)
	back(node.Left, nextStr, index+1, res)
	back(node.Right, nextStr, index+1, res)
}

func binaryTreePaths(root *TreeNode) []string {
	var res []string = []string{}
	if root == nil {
		return res
	}
	back(root, "", 1, &res)
	reg := regexp.MustCompile("^->")
	for i := 0; i < len(res); i++ {
		res[i] = reg.ReplaceAllString(res[i], "")
	}
	return res
}

// @lc code=end
