

/*
 * @lc app=leetcode.cn id=1302 lang=golang
 *
 * [1302] 层数最深叶子节点的和
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

func defs(node *TreeNode, count int, maxFloor *int, dict *map[int][]int) {
	if node == nil {
		return
	}

	defs(node.Left, count+1, maxFloor, dict)
	(*dict)[count] = append((*dict)[count], node.Val)
	if count > *maxFloor {
		*maxFloor = count
	}
	defs(node.Right, count+1, maxFloor, dict)
}

func deepestLeavesSum(root *TreeNode) int {
	maxFloor := -1
	dict := make(map[int][]int)
	res := 0
	defs(root, 0, &maxFloor, &dict)
	for _, v := range dict[maxFloor] {
		res += v
	}
	return res
}

// @lc code=end

// func main() {
// 	deepestLeavesSum(&TreeNode{
// 		Val: 1,
// 		Left: &TreeNode{
// 			Val: 2,
// 			Left: &TreeNode{
// 				Val:   3,
// 				Left:  nil,
// 				Right: nil,
// 			},
// 			Right: &TreeNode{
// 				Val:   4,
// 				Left:  nil,
// 				Right: nil,
// 			},
// 		},
// 		Right: nil,
// 	})
// }
