function getIndexToIns(arr, num) {
    if (arr.length == 0) {
        return 0;
    }
    arr = arr.sort((a, b) => { return a - b });
    let has = arr.indexOf(num);
    if (has >= 0) {
        return has;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < num && arr[i + 1] > num) {
                return i + 1;
            }
        }
    }
    if (num > Math.max(...arr)) {
        return arr.length;
    }

}

const re = getIndexToIns([], 1)
console.log(re);