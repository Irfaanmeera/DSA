function sumEven(arr,index=0,sum=0){
    if(index>arr.length){
      return sum;
    }

    if(arr[index]%2==0){
        sum += arr[index]
    }

    return sumEven(arr,index+1,sum)
}

console.log(sumEven([1,2,3,4,5,6]))