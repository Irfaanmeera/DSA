class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  //DFS - Depth-First Search
  preOrder(root) {
    //root, left, right
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    //left, root, right
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    //left , right , root
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  //BFS - Breadth First Search
  levelOrder() {
    const queue = [];
    queue.push(this.root); // enqueue root node
    while (queue.length) {
      //loop goes on as the long as the queue is empty
      const curr = queue.shift(); // dequeue the first the element
      console.log(curr.value); //read the value

      if (curr.left) {
        queue.push(curr.left); //enqueue node's left child
      }
      if (curr.right) {
        queue.push(curr.right); //enqueue node's right child
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(value){
    this.deleteNode(this.root,value)
  }

  deleteNode(root,value){ 
    if(root===null){
        return root;
    }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null;
            }
        
            if(!root.left){
            return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)

            }
            return root;
          }

     isBst(){
            return this.checkBst(this.root, -Infinity, +Infinity)
          }
          checkBst(root,min,max){
            if(root===null)return true;
            if(root.value<=min || root.value >= max)return false;

            return this.checkBst(root.left,min,root.value) && this.checkBst(root.right,root.value,max)

          }

    }
  


const bst = new binarySearchTree();
bst.insert(3);
bst.insert(10);
bst.insert(5);
bst.insert(15);



// console.log("Tree is Empty : ", bst.isEmpty());

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)

console.log('Min: ' +bst.min(bst.root));
// console.log(bst.max(bst.root));

bst.delete(5)
bst.levelOrder(bst.root)

console.log(bst.isBst())