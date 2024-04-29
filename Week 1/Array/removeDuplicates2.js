let arr = [1,2,2,2,3,5,5,7,8]

function removeDuplicates(arr){
    let count= 0;

    for(let i=0;i<arr.length-1;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(removeDuplicates(arr))