// find out if two strings are anagram
//use frequency counter pattern
//assume all are single word and all are lower case

function validAnagram(str1, str2){
if (str1.length !== str2.length){
    return false;
}

const lookup ={};

for (let i=0; i<str1.length; i++){
    let letter = str1[i];
    lookup[letter]? lookup[letter] +=1 : lookup[letter]=1;
}

for (let i=0; i< str2.kength; i++){

    let letter = str2[i];
    if(!lookup[letter]){
        return false;
    } else{
        lookup[letter]-=1;
    }
}
return true;
}

validAnagram('anagram', 'nagarmac');
