let arr = [-6,4,8,-2,20]

function mergeSort(arr){
    if(arr.length <2){  //the base case : the recursion will go till the length of the array becomes 1;
      return arr;
    }
    let mid = Math.floor(arr.length/2)  //Applying divide and conquer rule. Dividing the array into two.
    let leftArr = arr.slice(0,mid); //left arr contains element before mid index
    let rightArr = arr.slice(mid) // right arr will be having elements from mid index including the mid element

    return merge(mergeSort(leftArr),mergeSort(rightArr)); //recursive calling of left and right array till the length of left and tight array becomes 1; 
                     //Now the division has been done and for merging another function is been called
}

    function merge(leftArr,rightArr){
        let sortedArr=[]  //the sorted array elements will be stored 
        while(leftArr.length && rightArr.length){ //while loop will go until the arrays becomes empty
            if(leftArr[0] <= rightArr[0]){    //if first element of left array is less than first element of right array, then leftArr element is been pushed to sorted array and vice versa
                sortedArr.push(leftArr.shift())   //the first element from left array will  be removed as its been added to the sorted array.NOw the next elementin the left array becomes first element.
            }else{
                sortedArr.push(rightArr.shift())
            }
        }
        return [...sortedArr,...leftArr,...rightArr]
    }

    console.log(mergeSort(arr))