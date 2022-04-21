/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}



function sumNumbers(root: TreeNode | null): number {
  let result: number = 0; 
  let temp: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node.left&&!node.right) {
      const strSum = temp.join('')+`${node.val}`;
      const numSum = Number(strSum);
      result+=numSum;
      return;
    }
    temp.push(node.val);
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
    temp.pop();
  }

  dfs(root);

  return result;
};
// @lc code=end

