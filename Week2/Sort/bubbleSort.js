let arr = [-6,-2,8,4,20]

function bubbleSort(arr){
    let swapped;

do{ //do while loop to do atleast one iteration to be done before checking the while condition.
    swapped = false
    for(i=0;i<arr.length-1;i++){  //to iterate through the array
        if(arr[i] > arr[i+1]){   //if an element is greater than the adjacent element

           [ arr[i],arr[i+1]] = [arr[i+1],arr[i]] //then swap that element to the right
            swapped = true; //if the swapping happens, then swapped will be true.
        }
    }
}while(swapped)  //Enter into while loop..As long as the swapped is true, while loop will run.When no elements to sorted,swapped will be false and while loop will end.
  return arr;
}

console.log(bubbleSort(arr))