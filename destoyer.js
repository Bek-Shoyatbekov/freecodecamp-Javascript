function destroyer(arr) {
    let newArr = [];
    let arr1 = [];
    for (let i in arguments) {
        if (typeof arguments[i] != typeof arr) {
            newArr.push(arguments[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let re = newArr.includes(arr[i])
        if (!re) {
            arr1.push(arr[i])
        }
    }
    console.log(arr1);

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)