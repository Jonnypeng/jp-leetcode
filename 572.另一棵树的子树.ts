/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const dict: Map<('p' | 'q'), string> = new Map();

  dict.set('p', ``);
  dict.set('q', ``);

  const dfs = (node: TreeNode | null, tag: 'p' | 'q') => {
    let val: string = dict.get(tag) as string;

    if (!node) {
      val += '-null';
      dict.set(tag, val);
      return;
    } else {
      val += `-${node.val}`;
      dict.set(tag, val);
    }

    dfs(node.left, tag);
    dfs(node.right, tag);
  }

  dfs(p, 'p');
  dfs(q, 'q');

  return dict.get('p') === dict.get('q');
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let r: boolean = false;

  if (!root) {
    return false;
  }

  const dfs = (node: typeof root) => {
  
    const isSame = isSameTree(node,subRoot);
    if(isSame){
      r = true;
      return;
    }

    if (node.left && !r) {
      dfs(node.left);
    }

    if (node.right && !r) {
      dfs(node.right);
    }
  }

  dfs(root);

  return r;

};
// @lc code=end

