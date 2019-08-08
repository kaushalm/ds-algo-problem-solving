var arr = [4, 2, 8, 5, 6, 2, 1];

function selectionsort(arr) {

    for (var j = 0; j < arr.length - 1; j++) {
        var min = j;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[i + 1] = temp;
    }
    return arr;
}

selectionsort(arr);
console.log(arr);
