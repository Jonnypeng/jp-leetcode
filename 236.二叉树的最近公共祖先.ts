/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function intersection(nums1: TreeNode[], nums2: TreeNode[]): TreeNode[] {
  const arr: TreeNode[] = [];
  let minArr: TreeNode[];
  let maxArr: TreeNode[];
  if (nums1.length <= nums2.length) {
    minArr = nums1;
    maxArr = nums2;
  } else {
    minArr = nums2;
    maxArr = nums1;
  }
  minArr.forEach(v => {
    const maxArrHasValue = maxArr.indexOf(v);
    if (maxArrHasValue !== -1) {
      arr.push(v);
      maxArr.splice(maxArrHasValue, 1);
    }
  })
  return arr;
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const childToParent: Map<number, TreeNode> = new Map();
    const pTree: TreeNode[] = [];
    const qTree: TreeNode[] = [];

    const dfs = (node: typeof root, parent: typeof root) => {
        if (parent) {
            childToParent.set(node.val, parent);
        }else{
            childToParent.set(node.val, null);
        }
        if (node?.left) {
            dfs(node.left, node);
        }
        if (node?.right) {
            dfs(node.right, node);
        }
    }

    dfs(root, null);

    const getTree = (node: TreeNode, tree: TreeNode[]) => {
        if(!node){
            return;
        }
        tree.push(node);
        const parent = childToParent.get(node.val);
        getTree(parent,tree);
    }

    getTree(p,pTree);
    getTree(q,qTree);

    const subTree = intersection(pTree,qTree);


    return subTree[0];
}
// @lc code=end

