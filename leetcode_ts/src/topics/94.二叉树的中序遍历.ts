/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const ans: number[] = [];

  // const dfs = (node: typeof root) => {
  //   if (!node) {
  //     return;
  //   }
  //   dfs(node.left);
  //   ans.push(node.val);
  //   dfs(node.right);
  // }

  // dfs(root);

  const stack: typeof root[] = [root];

  while (stack.length > 0) {
    const node = stack[stack.length - 1]
    if (node.left) {
      stack.push(node.left);
    }
    const last = stack.pop();
    console.log(last.val);
    // const node = stack.pop();
    // ans.push(node.val);
    if(last.right){
      stack.push(node.right);
    }
  }

  return ans;
};
// @lc code=end

