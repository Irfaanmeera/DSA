function countOccurence(str){

    let occurences ={}

    for(let char of str){
        if(!occurences[char]){
        occurences[char] = 0
        }
        occurences[char]++;
    }
       return occurences;
}

console.log(countOccurence('aaabbbgghfffjk'))