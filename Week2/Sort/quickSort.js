let arr = [-6,4,-2,20,8]


function quickSort(arr){
    if(arr.length===1){   //it's a recursive function. the base case is when the length of the array is 1.
        return arr;
    }
let pivot = arr[arr.length-1]   //take the last element as pivot element
let left =[] //divide the arr into two. left having elements less than pivot element
let right =[]  //right having elements greater than pivot element

for(i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
}
return [...quickSort(left),pivot,...quickSort(right)]   //recursive function will continue the operation of sorting within the left and right and then using spread operator concatenating left pivot and right 
}

console.log(quickSort(arr))