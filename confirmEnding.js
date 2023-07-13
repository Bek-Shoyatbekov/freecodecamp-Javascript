function confirmEnding(str, target) {
    for (let i in str.split('')) {
        if (str.slice(i) == target) {
            return true;
        }
    }
    return false;
}

const result = confirmEnding("Bastian", "n");

console.log(result);