function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        let arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }

};

const result = rangeOfNumbers(2, 5);

console.log(result);