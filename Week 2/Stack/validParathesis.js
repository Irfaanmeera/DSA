function validParantheses(str){
    let stack =[];
    const matchingBrackets = {
        ')' :'(',
        '{' :'}',
        '[' :']'
    }

    for(let i=0;i<str.length;i++){
        const char = str[i];
        if(char ==='(' || char ==='{' || char === '['){
            stack.push(char)
        }else{
            const top = stack.pop()
            if(matchingBrackets[char]!==top){
                return false;
            }
        }
    }
    return stack.length===0
}

console.log(validParantheses('(){'))