/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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


 function levelOrder(root: TreeNode | null): number[][] {
  const levels: number[][] = [];

  if(!root){
      return levels;
  }

  const dfs = (node: typeof root, level: number) => {
      if(levels.length === level){
          levels[level] = [];
      }

      levels[level].push(node.val);

      if(node.left){
          dfs(node.left,level+1);
      }

      if(node.right){
          dfs(node.right,level+1);
      }
  }

  dfs(root,0);

  return levels;
};
// @lc code=end

