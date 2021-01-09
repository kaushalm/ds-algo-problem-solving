var arr =[];

function closure(){


    for(var i=0; i<3; i++){

        arr.push(
        function(){
            console.log(i);
        }
       )
    }
}
closure();
arr[0]();
arr[1]();
arr[2]();

var arr2 =[];

function closure2(){

//use let or IIFE
//use let j = 1;
    for(var i=0; i<3; i++){
        arr2.push(
        (function(j){
        return function(){
            console.log(j);
        }
       }
       )(i))
    }
}
closure2();
arr2[0]();
arr2[1]();
arr2[2]();
