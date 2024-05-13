class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
      return 0;
  } else {
      const leftDepth = maxDepth(root.left);
      const rightDepth = maxDepth(root.right);
      return 1 + Math.max(leftDepth, rightDepth);
  }
}

// Example usage:
// Constructing a binary tree
//        3
//       / \
//      9  20
//        /  \
//       15   7
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("Maximum depth of the binary tree:", maxDepth(root)); // Output: 3
