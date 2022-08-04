/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
 */

import { TreeNode } from './type';

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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {

  const insert = (node: TreeNode | null, val: number) => {
    if (!node) {
      root = {
        val,
        left: null,
        right: null 
      }
      return;
    }

    if(node.val === val){
      return;
    }

    if (val > node.val) {
      if (node.right) {
        insert(node.right, val);
      } else {
        node.right = {
          val,
          left: null,
          right: null
        }
        return;
      }
    } else if (val < node.val) {
      if (node.left) {
        insert(node.left, val);

      } else {
        node.left = {
          val,
          left: null,
          right: null
        }
        return;
      }
    }
  }

  insert(root, val);

  return root;

};
// @lc code=end


// test
// insertIntoBST({
//   val:4,
//   left:{
//     val:2,
//     left:{
//       val:1,
//       left:null,
//       right:null
//     },
//     right:{
//       val:3,
//       left:null,
//       right:null
//     }
//   },
//   right:{
//     val:7,
//     left:null,
//     right:null
//   }
// },5);
// insertIntoBST(null,5)
