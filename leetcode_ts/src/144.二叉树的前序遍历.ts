/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  if(!root){
    return [];
  }

  const stack: typeof root[] = [root];
  const ans: number[] = [];

  while(stack.length > 0){
    const node = stack.pop();
    ans.push(node.val);
    if(node.right){
      stack.push(node.right);
    }
    if(node.left){
      stack.push(node.left);
    }
  }
  return ans;
};
// @lc code=end

