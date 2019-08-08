var arr = [4, 2, 8, 5, 6, 2, 1]

function bubblesort(arr) {
    var swaps;
    for (var j = 0; j < arr.length - 1; j++) {
        swaps = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaps = true;
            }
        }
        if (swaps == false) {
            break;
        }
    }
}

bubblesort(arr);
console.log(arr);

//if the array is almost sorted we can optimize our sort 
//O(n2)
