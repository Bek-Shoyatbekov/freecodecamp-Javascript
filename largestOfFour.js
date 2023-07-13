function largestOfFour(arr) { //it's my solution 
    let max_of_arr = [];
    for (let i = 0; i < arr.length; i++) {
        max_of_arr.push(i)
    }
    for (let i in arr) {
        for (let j in arr[i]) {
            if (arr[i][j] > max_of_arr[i]) {
                max_of_arr[i] = arr[i][j];
            }
        }
    }
    return max_of_arr;
}

function largestOfFour(arr) { //this is freeCodeCamp solution
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

function largestOfFour(arr) {  //second freeCodeCamp solution
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

function largestOfFour(arr) {  //third freeCodeCamp solution 🙂
    return arr.map(Function.apply.bind(Math.max, null));
}

function largestOfFour(arr, finalArr = []) { //fourth freeCodeCamp solution
    return !arr.length
        ? finalArr
        : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}


const result = largestOfFour([[4, 9, 1, 3, 10], [13, 35, 18, 26], [32, 35, 97, 39, 100], [1000000, 1001, 857, 1]]);

console.log(result);