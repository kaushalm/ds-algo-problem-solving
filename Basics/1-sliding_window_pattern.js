//find max sub array sum of an integer array, for a given sub array length
function maxSubArraySum(arr, num){
    if(num> arr.length){
        return null;
    }

   let max = -Infinity;
   for (let i=0; i< arr.length-num+1; i++){
       temp =0;
       for(let j=0; j< num ; j++){
           temp += arr[i+j];
       }
       if(temp>max){
           max=temp;
       }
   }
   return max;
}
//maxSubArraySum([2,6,9,2,1,8,5,6], 3);
//use sliding window for O(n) complexity
function maxSumSubArr(arr, num){
    let tempSum = 0;
    let maxSum = 0;
    if(arr.length < num){
        return null;
    }

    for (let i=0; i< num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i= num; i< arr.length; i++){
        tempSum = tempSum -arr[i-num] +arr[1];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;

}

maxSumSubArr([2,6,9,2,1,8,5,6], 3);
