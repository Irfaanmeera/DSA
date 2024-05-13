class Heap{
    constructor(){
        this.data = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChildIndex(i){
        return i*2+1
    }
    getRightChildIndex(i){
        return i*2+2
    }

    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }

    push(key){
        this.data[this.data.length] = key;
        this.heapifyUp();
    }
    heapifyUp(){
       let currentIndex = this.data.length-1
       while(this.data[currentIndex]<this.data[this.getParentIndex(currentIndex)]){
        this.swap(currentIndex, this.getParentIndex(currentIndex))
        currentIndex = this.getParentIndex(currentIndex)
       }

    }

}

const heap = new Heap()

heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)
console.log(heap.data.join(','))