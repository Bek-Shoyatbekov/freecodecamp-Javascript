function mutation(arr) {
    let first = arr[0].toLowerCase().split('');
    let second = arr[1].toLowerCase().split('');
    let result = true;
    second.map((e) => {
        let re = first.indexOf(e);
        if (re < 0) {
            result = false;
        }
    });
    return result;
}

const re = mutation(["Mary", "Army"])
console.log(re);