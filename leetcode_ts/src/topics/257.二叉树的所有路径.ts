/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// @lc code=start



function backtrack(node: TreeNode | null, str: string, index: number, res: string[]) {
  if (res.length > 0) {
    const i = res.length - 1;
    const lastVal = res[i];
    const reg0 = new RegExp(lastVal);
    const reg1 = new RegExp(str);
    if (reg0.test(str)) {
      res[i] = str;
    } else if(!reg1.test(lastVal)){
      res.push(str);
    }
  } else {
    res.push(str);
  }
  if (!node) {
    return;
  }
  backtrack(node.left, `${str}->${node.val}`, index + 1, res);
  backtrack(node.right, `${str}->${node.val}`, index + 1, res);
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  if (!root) {
    return res;
  }
  backtrack(root, "", 1, res);
  return res.map(v=>v.replace(/^->/,""));
};
// @lc code=end

// [1,2,3,4,5,6,7]
// [1,2,3,4,5,6,7,8]
