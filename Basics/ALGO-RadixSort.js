function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

function getDigitCount(num){
    if(num===0) return 1;
    return Math.floor(MAth.log10(Math.abs(num)))+1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = MAth.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr){

    let maxDigits = mostDigits(arr);

    for(let k=0; k<maxDigits; k++){

        let digitBuckets = Array.from({length:10}, () => []);
        for(let i=0; i<num; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[1]);
        }
        nums = array.concat(...digitBuckets);
    }

    return nums;
}
