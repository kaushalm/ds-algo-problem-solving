// think about problem, understand the problem
// get some sonceret examples
//break it down
//solve simplify
//look back and refactor


function charCount(str){
let result={};
for(let i=0; i< str.length; i++){
    //make all characters lower case
    let char = str[i].toLowerCase();
    //regular expression to test if only numbers and characters are entered using test function
    if(/[a-z0-9]/.test(char)){
    if(result[char]>0){
        result[char]++;
    }
    else{
        result[char]=1;
    }}
}
return result;
}

charCount("hHello!!");

//refactor
//change for to for of for(var char of str){}
//change single if else to ternary operation or more simpler like result[char] == ++ result[char] || 1
//replace regular expression with ascii range check charCodeAt(0) and copmare with numeric alphanumeric codes
// above method is faster than regular expression
