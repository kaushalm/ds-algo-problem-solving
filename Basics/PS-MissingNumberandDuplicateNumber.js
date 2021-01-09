function findMissing(arr){
    //create a new array
    //insert values one by one at correct index
    //iterate array again
    //where you find null that's missing
    
    freCounter ={};
    for(let i = 0; i<arr.length; i++ ){
        freCounter[arr[i]] = freCounter[arr[i]] ? freCounter[arr[i]]+1: 1;
    }

    console.log(freCounter);
    let counter = 1;
    let missing =[];
    for(let key in freCounter){    
        if(Number(key) !== counter){
            missing.push(counter);
            counter++;
        }
        counter++;
    }

    console.log(missing);
}

//n*(n+1)/2
findMissing([1,9,5,4,6,7,8,3, 11])

function findDuplicates(arr){
    freCounter ={};
    for(let i = 0; i<arr.length; i++ ){
        freCounter[arr[i]] = freCounter[arr[i]] ? freCounter[arr[i]]+1: 1;
    }

    console.log(freCounter);
    let duplicate =[];
    for(let key in freCounter){    
        if(freCounter[key] > 1){
            duplicate.push(key);
        }
    }
        console.log(duplicate);

}

findDuplicates([1,2,3,4,9,8,6,7,2,5,7])
