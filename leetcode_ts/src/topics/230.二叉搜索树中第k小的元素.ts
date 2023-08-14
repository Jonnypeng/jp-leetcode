/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function dfs(node: TreeNode | null, res: number[]) {
  if (!node) {
    return
  }
  // 优先将最小值进行入栈
  dfs(node.left, res);
  res.push(node.val);
  // 其次将较大值进入入栈
  dfs(node.right, res);
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const res: number[] = [];
  dfs(root, res);
  return res[k - 1]
};
// @lc code=end

