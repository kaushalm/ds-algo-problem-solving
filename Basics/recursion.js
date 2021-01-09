//recursion
//print numbers upto n using recursion

function printRecursive(num){
    if(num<=0){
        console.log("all done");
        return
    }
    else{
        console.log(num);
        num--;
        printRecursive(num);
    }
}

//printRecursive(5);

//factorial

function factorial(num){
let fact=0;
if (num===0)
{ 
    return 1;
}
else
{
    return num * factorial(num-1);
}
}

//factorial(5);

//common recursion pitfalls, problems
// no base condition or stopping point or fprgrtting return statements
