/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const dict: Map<('p' | 'q'), string> = new Map();

  dict.set('p', ``);
  dict.set('q', ``);

  const dfs = (node: TreeNode | null, tag: 'p' | 'q') => {
    let vals = dict.get(tag);

    if (!node) {
      vals+= '-null';
      dict.set(tag, vals);
      return;
    } else {
      vals+=`-${node.val}`;
      dict.set(tag, vals);
    }

    dfs(node.left, tag);
    dfs(node.right, tag);
  }

  dfs(p, 'p');
  dfs(q, 'q');

  return dict.get('p') === dict.get('q');
};
// @lc code=end

