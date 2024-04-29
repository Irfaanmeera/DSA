let arr = [0,1,5,6,9,4,3]

function searchIndex(arr, target){
    let left =0;
    let right = arr.length-1;

    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]===target){
            return middle;
        }
        if(target > arr[middle]){
            left= middle+1;
        }else{
            right= middle-1;
        }
       
    }
    return -1;
}

console.log(searchIndex(arr,10))