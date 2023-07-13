

function repeatStringNumTimes(str, num) {
    let arr = [];
    if (num <= 0) {
        return "";
    }
    for (let i = 0; i < num; i++) {
    arr.push(str);
    }
    return arr.join('');
}

const  result = repeatStringNumTimes("abc", 3);

console.log(result);