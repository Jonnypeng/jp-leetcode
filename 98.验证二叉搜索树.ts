/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }

function isValidBST(root: TreeNode | null): boolean {
  const deque: TreeNode[] = [];
  let rs: boolean[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    let r = node.val > (node.left ? node.left.val : Number.MIN_VALUE);
    r = node.val < (node.right ? node.right.val : Number.MAX_VALUE);
    rs.push(r);
    dfs(node.right);
  }

  dfs(root);

  console.log(rs);

  return rs.every(v=>v===true);



};
// @lc code=end

