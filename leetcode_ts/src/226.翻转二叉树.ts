/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}


function invertTree(root: TreeNode | null): TreeNode | null {

  const dfs = (node: TreeNode | null) => {
    if(!node){
      return;
    }

    const nodeLeft = node.left;
    node.left = node.right;
    node.right = nodeLeft;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return root;

};
// @lc code=end

