function fib(n){
    if(n==0||n==1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2)
    }
   
} 

let i = 0;
while(fib(i) <=10){
    console.log(fib(i))
    i++;
}

