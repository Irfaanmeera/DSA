class Node{
    constructor(value){
        this.value = value;
        this.left =null;
        this.right =null;
    }
}

class BST{
    constructor(){
        this.root =null
    }

    insert(value){
       const newNode = new Node(value)
       if(this.root===null){
        this.root = newNode;
       }else{
        this.insertNode(this.root,newNode)
       }
    }

    insertNode(root,newNode){
        if(newNode.value <root.value){
            if(root.left===null){
                root.left= newNode;
            }else{
            this.insertNode(root.left,newNode)
            }
        }else{

        if(newNode.value>root.value){
            if(root.right===null){
                root.right= newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }
}
  }
 preOrder(root){
    if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    }
 }
 levelOrder(){
    const queue = [];
    queue.push(this.root)

    while(queue.length){

        let curr = queue.shift()
        console.log(curr.value)

           if(curr.left){
            queue.push(curr.left)
           }
           if(curr.right){
            queue.push(curr.right)
           }

    }
 }


 min(root){
    if(!root.left){
        return root.value;
    }else{
        return this.min(root.left)
    }
 }
 max(root){
    if(!root.right){
        return root.value;
    }else{
        this.max(root.right)
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
            return this.checkBST(this.root, -Infinity, +Infinity)
          }
            checkBST(root,min,max){
                if(root===null)return true;
                if(root.value <=min || root.value >=max)return false

                return this.checkBST(root.left,min,root.value)&& this.checkBST(root.right,root.value,max)

            
          }
 }



const bst = new BST()
bst.insert(40)
bst.insert(50)
bst.insert(70)
bst.insert(30)



bst.levelOrder()
bst.delete(70)

console.log(bst.isBst())

console.log('Min: ' + bst.min(bst.root))
