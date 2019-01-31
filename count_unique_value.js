// count the unique values in an integer array
function countUniqueValues(arr){
    if (arr.length===0){
        return 0;
    }
    let left= 0;
    let right= 1;
    
    while(right!=arr.length-1){
        if(arr[right] !== arr[left]){
            left++;
        } right++;
    }
    return left+1;
  // add whatever parameters you deem necessary - good luck!
}

countUniqueValues([1,1,2,3,4,4,5,6]);
