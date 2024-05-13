class Heap{
    constructor(){
        this.data = []
    }

    getParentIndex(i){
       return Math.floor((i-1/2))
    }
    getLeftChildIndex(i){
        return i*2+1;
    }
    getRightChildIndex(i){
        return i*2+2;
    }

    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }
    push(key){
        this.data[this.data.length] = key;  //adding data to the last index
        this.heapifyUp()   //recursively swapping last index with its parent, if the added data is larger than parent.
    }
    heapifyUp(){
        let currentIndex = this.data.length-1;  //last index
        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
       
    }

    poll(){
        const maxValue = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.length--;
        this.heapifyDown();
        return maxValue;
    }
    heapifyDown(){
        let currentIndex = 0;
        

        while(this.data[this.getLeftChildIndex(currentIndex)] !==undefined){
            let biggestChildIndex = this.getLeftChildIndex(currentIndex)

            if(this.data[this.getRightChildIndex(currentIndex)] && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]){
                biggestChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.data[currentIndex] < this.data[biggestChildIndex]){
                this.swap(currentIndex,biggestChildIndex)
                currentIndex = biggestChildIndex;
            }else{
                return;
            }
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
let a =[]
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())



console.log('Removed Elements : '+a)