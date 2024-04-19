//count of unique elements

let arr= [1,2,2,3,4,4,5,5,5]

function removeDuplicates(){
    let j=1;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i+1]
            j++;
        }
    }
    return j;
}

console.log(removeDuplicates(arr))