let arr= [-6,4,-2,20,8]

function insertionSort(arr){

    //divide the array into sorted and unsorted. Consider first element as sorted one.
    for(i=1;i<arr.length;i++){
        let numberToInsert = arr[i] //first element in the unsorted segment
        let j= i-1   //sorted element index

        while(j>=0 && arr[j]>numberToInsert){  //iterate till numberToInsert is less than elements in the sorted segments
            arr[j+1] = arr[j]  //make arr[j+1] as arr[j]
            j--;  //reduce j value and continue the loop until arr[j] is less than number to insert.
        }
        arr[j+1] = numberToInsert;//if arr[j] is less than number toInsert then place it right of arr[j]
    }
    return arr;
}

console.log(insertionSort(arr))