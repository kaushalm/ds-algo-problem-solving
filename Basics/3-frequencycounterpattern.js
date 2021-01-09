//frequency counter pattern
function same( arr1, arr2){
    if(arr1.length !== arr2.length)
    {
        return false;
    }

    let freCounter1 ={};
    let freCounter2 ={};

//this is to find an return an object with frequency of each value
    for (let val of arr1){
        freCounter1[val] = (freCounter1[val] || 0)+1;
    }
    for (let val of arr2){
        freCounter2[val] = (freCounter2[val] || 0)+1;
    }
    console.log(freCounter1);
    console.log(freCounter2);


    for(let key in freCounter1){
        if(!(key**2 in freCounter2)){
            return false;
        }
        if(freCounter2[key**2] !== freCounter1[key]){
            return false
        }

    }
    return true;
}


same([1,2,3,4], [1,4,9,16]);
