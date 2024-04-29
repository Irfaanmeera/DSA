function countVowel(str){

    let count ={}

    str = str.toLowerCase()
    const vowels =['a','e','i','o','u']

    for(let char of str){
        if(vowels.includes(char)){
            if(!count[char]){
                count[char] =0;
            }
            count[char]++;
        }
    }
    return count;
}

console.log(countVowel('hEelloaa'))