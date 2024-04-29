// class Node{
//     constructor(head,next){
//         this.head = head;
//         this.next =null;
//     }
// }

// class LinkedList{
//   constructor(head){
//     this.head;
//   }

//   prepend(data){
//     const newNode= new Node(data)
//     if(!this.head){
//         this.head = newNode;
//     }else{
//         newNode.next = this.head;
//         this.head.newNode;
//     }
//   }


// }


// let str = 'hello'

// function reverseStr(str){
//     let reversedStr = str.split('').reverse().join('')
//     return reversedStr;
// }

// console.log(reverseStr(str))


// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*factorial(n-1)
//     }
// }

// console.log(factorial(5))

let str= 'aabbcdeef'

function removeDuplicates(str){
    let newStr=''
   for(i=0;i<str.length;i++){
    if(str[i]==str[i+1]){
        continue
    }else{
        newStr += str[i]
    }
   }
    return newStr;
}

console.log(removeDuplicates(str))