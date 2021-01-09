//write a function sum zero which takes an sorted integer arrau and find the first pair whose sum is zero
//easy way to do this is have two loops one from starting of first arry and second one from next number of same arry and match all cmbinations
function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum =  arr[left]+arr[right];
        if(sum===0){
            return [arr[left], arr[right]];
        }
        else if(sum >0){
            right--;
        } else{
            left++
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 4])
