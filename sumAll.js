function sumAll(arr) {
    let sum = 0;
    let start = (arr[0] < arr[1]) ? arr[0] : arr[1];
    let end = (start == arr[0]) ? arr[1] : arr[0];
    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;

}

sumAll([10, 5]);