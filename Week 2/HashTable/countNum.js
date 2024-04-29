function countNum(arr){
    let count ={}

    for(let i=0;i<arr.length;i++){
        if(!count[arr[i]]){
            count[arr[i]] =0

        }
        count[arr[i]]++;
    }
    return count;
}

console.log(countNum([1,2,1,1,2,3,3,3,4]))