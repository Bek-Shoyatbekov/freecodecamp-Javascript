function uniteUnique(arr) {
    arr = Array.from(arguments);
    return Array.from(new Set(arr.flat()));
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);