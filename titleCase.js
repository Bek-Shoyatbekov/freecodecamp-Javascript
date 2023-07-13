function titleCase(str) {
    let arr = str.split(' ');
    for (let i in arr) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();   
    }
    return arr.join(' ');
   
}

const result = titleCase("sHoRt AnD sToUt");
console.log(result);