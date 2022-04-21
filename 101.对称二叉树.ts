/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  let isEnd: boolean = false;
  let result: boolean = true;

  const dfs = (A: TreeNode | null, B: TreeNode | null) => {
    if (isEnd) {
      true;
    }
    if(!A&&!B){
      return;
    }
    if ((!A && B) || (A && !B)) {
      result = false;
      isEnd = true;
      return;
    }
    if (A.val !== B.val) {
      result = false;
      isEnd = true;
      return;
    }
    dfs(A.left, B.right);
    dfs(A.right, B.left);
  }

  dfs(root.left, root.right);
  return result;
};
// @lc code=end

