let num=10

function isPalindrome(num){
    return num <0 ? false : num==num.toString().split('').reverse().join('')
}

console.log(isPalindrome(num))