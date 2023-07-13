function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            newArr.push(arr2[i]);
        }

    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}


let re = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
console.log(re);