let arr = [-6,-2,8,4,20]


function selectionSort(arr){
   

    for(i=0;i<arr.length;i++){
        let min=i;   //take the first element as minimum element
        for(j=i+1;j<arr.length;j++){   //compare with next element
            if(arr[j]<arr[min]){   //if next element is less than minimum element, 
                min=j  //then make that element minimum element
            }
        }
        if(min !==i){  //if minimum element is not in Ith position,then swap the elements
            [arr[i], arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr;
}

console.log(selectionSort(arr))