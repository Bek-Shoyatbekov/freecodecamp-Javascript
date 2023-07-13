function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i in arr) {
        for (let j in arr[i]) {
            if (arr[i][j] == elem) {
                arr[i] = 0;
            }
        }
    }
    for (let i in arr) {
        if (arr[i].length > 0) {
            newArr.push(arr[i])
        }
    }

    return newArr;

    // Only change code above this line

}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));