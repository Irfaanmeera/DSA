class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function minDepth(root){
    if(root===null)return 0;

    const leftDepth = minDepth(root.left)
    const rightDepth = minDepth(root.right)
    return 1+ Math.min(leftDepth,rightDepth)
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("Minimum depth of the binary tree:", minDepth(root)); 