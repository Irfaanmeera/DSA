class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (const element of arr) {
        linkedList.append(element);
    }
    return linkedList;
}
console.log(arrayToLinkedList([1,2,3,4,5]))
