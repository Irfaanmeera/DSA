var arr = [-1,5,4,6,11]
var t=4;

function findIndex(arr,t){

    for(i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i;
        }
    }
 return -1;
}

console.log(findIndex(arr,t))