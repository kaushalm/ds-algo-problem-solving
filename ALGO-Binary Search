var arr = [1,2,3,4,5,6,7,8,9];

function binarysearch(arr, value){    

    var start = 0;
    var end = arr.length-1;
    var mid = Math.round((start+end)/2);

    for (var i=0; i<arr.length; i++){
		if (arr[mid] == value){
            return mid;
        }
        else if (arr[mid] >value){
            end = mid-1;
            middle = Math.floor((start+end)/2);
        } else {
            start= mid+1;    
            mid = Math.floor((start+end)/2);}
    }
return -1;

}



console.log(binarysearch(arr, 8));
