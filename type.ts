export interface ListNode<T extends any> {
  val: T;
  next: ListNode<T> | null;
}

export interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}