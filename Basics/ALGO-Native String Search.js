var phrase ="who is the haha ha guy"


function stringSearch(phrase, txt){
    var count=0;
    for(var i = 0; i< phrase.split('').length; i++){
        for(var j =0; j< txt.split('').length; j++){
            if(txt[j] != phrase[i+j]){
                break;
            }
            if(j == txt.length-1){
                count++;
            }
        }
    }
    console.log(count);
}

stringSearch(phrase, 'ha')
