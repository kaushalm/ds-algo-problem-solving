//find if given string si n anagram or not
//an anagram are words which can be formed from each other
//any character in 256 set of characters

function isAnagram (word1, word2) {

    if(word1.length !== word2.length){
        console.log('NOT anagram');
        return false;
    }

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    let lookup ={};

    for(let i=0; i<word1.length; i++){
        let letter = word1[i]
        if(lookup[word1[i]]){

            lookup[word1[i]] +=1; 
        } else {
            lookup[word1[i]] =1;
        }
    }

    for(let j=0; j<word2.length; j++){
        if(!lookup[word2[j]]){
            console.log('NOT anagram');
            return false
        } else{
            lookup[word2[j]] -=1;
        }
    }

    console.log('anagram');
    return true;

    //console.log(lookup);
    //console.log(word2);

}

isAnagram('banana', 'BANANA');